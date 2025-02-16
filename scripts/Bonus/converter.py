# HTML TEX
# Script to convert HTML files in a directory to a single LaTeX file
# Author: Andrea Benvegnù, additional fixes by Matteo Garzon
# Date: 13-11-2024
# Needed libraries: beautifulsoup4, colorama

# How to use: just run the script (with python3 converter.py) and follow the instructions
# The script will ask you for a directory path to translate, and it will generate a LaTeX file with the content of the HTML files in the directory
# The generated file will be downloaded in the same directory as the script
# You can also choose a custom output filename or use the default one (output.tex)
# For a better usage of the script it is raccomeded to put the directory to translate in the same directory as the script and for the path use (./directory_name)


import os
from bs4 import BeautifulSoup # type: ignore
import re
from colorama import init, Fore, Style # type: ignore


init(autoreset=True)

# Define special LaTeX characters that need escaping
LATEX_SPECIAL_CHARACTERS = {
    '#': '\\#', '$': '\\$', '%': '\\%', '&': '\\&', '_': '\\_',
    '{': '\\{', '}': '\\}', '~': '\\textasciitilde{}', '^': '\\textasciicircum{}',
    '\\': '\\textbackslash{}'
}

# Clear the terminal screen
def clear_screen():
    """Clear the terminal screen."""
    os.system('cls' if os.name == 'nt' else 'clear')

# Display the ASCII art title
def display_title():
    """Displays the ASCII art title in red."""
    title_art = """
    __  __________  _____       _____________  __
   / / / /_  __/  |/  / /      /_  __/ ____/ |/ /
  / /_/ / / / / /|_/ / /        / / / __/  |   / 
 / __  / / / / /  / / /___     / / / /___ /   |  
/_/ /_/ /_/ /_/  /_/_____/    /_/ /_____//_/|_|  
                                                  
    """
    print(Fore.RED + title_art + Style.RESET_ALL)

# Prompt the user for a directory path
def prompt_for_directory():
    """Prompt the user for a directory path."""
    return input("Enter the directory path to translate: ")

# Prompt the user for a custom output filename
def prompt_for_output_filename():
    """Prompt the user for a custom output filename or use default, ensuring it ends with .tex."""
    use_custom_name = input("Do you want to change the output file name (default is output.tex)? (y/n) -> ").lower()
    if use_custom_name == 'y':
        filename = input("Enter the custom output file name: ")
        # Ensure the filename ends with .tex
        if not filename.endswith(".tex"):
            filename += ".tex"
        return filename
    return "output.tex"

# Escape special LaTeX characters in text
def escape_latex(text):
    """Escape special LaTeX characters in text."""
    return ''.join(LATEX_SPECIAL_CHARACTERS.get(c, c) for c in text)

# Convert HTML content to LaTeX
def html_to_latex(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    title = soup.title.string if soup.title else "Untitled"
    title = escape_latex(title)

    if title[-9:] == " - YoUnix": 
        title = title[:-9]

    latex_content = []
    in_itemize = False
    in_enumerate = False

    # Loop through all elements in the HTML content and convert to LaTeX using BeautifulSoup
    for element in soup.descendants:
        if element.name == 'h1':
            latex_content.append(f"\\section{{{escape_latex(element.get_text().strip())}}}")
        elif element.name == 'h2':
            a = escape_latex(element.get_text().strip())
            if a.split()[0] != ">Quiz":
                latex_content.append(f"\\subsection{{{escape_latex(element.get_text().strip())}}}")
        elif element.name == 'h3':
            a = escape_latex(element.get_text().strip())
            if a.split()[0] != "Question":
                latex_content.append(f"\\subsubsection{{{escape_latex(element.get_text().strip())}}}")
        elif element.name == 'p':
            latex_content.append(f"{escape_latex(element.get_text().strip())}\n\n")
        elif element.name in ['b', 'strong']:
            latex_content.append(f"\\textbf{{{escape_latex(element.get_text().strip())}}}")
        elif element.name in ['i', 'em']:
            latex_content.append(f"\\textit{{{escape_latex(element.get_text().strip())}}}")
        elif element.name == 'ul':
            if in_enumerate:
                latex_content.append("\\end{enumerate}")
                in_enumerate = False
            latex_content.append("\\begin{itemize}")
            in_itemize = True
        elif element.name == 'ol':
            if in_itemize:
                latex_content.append("\\end{itemize}")
            latex_content.append("\\begin{enumerate}")
            in_enumerate = True
        elif element.name == 'li':
            latex_content.append(f"\\item {escape_latex(element.get_text().strip())}")
        elif element.name == 'br':
            latex_content.append("\\newline ")
        elif element.name == 'a':
            href = escape_latex(element.get('href', '#'))
            text = escape_latex(element.get_text())
            latex_content.append(f"\\href{{{href}}}{{{text}}}")

    if in_itemize:
        latex_content.append("\\end{itemize}")
    if in_enumerate:
        latex_content.append("\\end{enumerate}")

    return title, "\n".join(latex_content)

# Process all HTML files in a directory and convert to LaTeX
def process_directory(directory_path):
    latex_output = []

    for root, _, files in os.walk(directory_path):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    html_content = f.read()

                title, latex_content = html_to_latex(html_content)
                latex_output.append("\\newpage")
                latex_output.append(f"\\Huge\\raggedright{{{title}}}")
                latex_output.append("\\vspace{1cm}")
                latex_output.append("\\normalsize\\leftskip=0pt")
                latex_output.append("\\raggedright")
                latex_output.append(latex_content)
                latex_output.append("\n")

    return clean_latex_content("\n".join(latex_output))

# Clean up the LaTeX content
def clean_latex_content(content):
    content = re.sub(r'\\href{([^}]+)}{([^}]*)}', lambda m: f'\\href{{{m.group(1)}}}{{{m.group(2)}}}', content)
    itemize_stack = []
    lines = content.splitlines()
    fixed_lines = []

    for line in lines:
        if '\\begin{itemize}' in line:
            itemize_stack.append('itemize')
            fixed_lines.append(line)
        elif '\\begin{enumerate}' in line:
            itemize_stack.append('enumerate')
            fixed_lines.append(line)
        elif '\\end{itemize}' in line or '\\end{enumerate}' in line:
            if itemize_stack:
                itemize_stack.pop()
            fixed_lines.append(line)
        else:
            fixed_lines.append(line)

    for open_env in reversed(itemize_stack):
        fixed_lines.append(f"\\end{{{open_env}}}")

    cleaned_content = '\n'.join(fixed_lines)
    cleaned_content = cleaned_content.replace("\\newline \n", "\n")
    cleaned_content = re.sub(r"(\\Huge{[^}]+})", r"\1\n\\normalsize", cleaned_content)
    return cleaned_content

# Main function to start the script
def main():
    clear_screen()
    display_title()

    # Infinite loop to keep asking the user if they want to translate another directory
    while True:
        start_translation = input("Translate a directory of HTML into LaTeX? (y/n) -> ").lower()
        if start_translation != 'y':
            print("Exiting the program.")
            break

        directory_path = prompt_for_directory()
        output_file = prompt_for_output_filename()

        latex_document = [
            "\\documentclass{article}",
            "\\usepackage{hyperref}",
            "\\usepackage{graphicx}",
            "\\usepackage[T1]{fontenc}",
            "\\setlength{\\parindent}{0pt}",
            "\\begin{document}",
            "\\raggedright"
        ]

        latex_content = process_directory(directory_path)

        if latex_content:
            latex_document.append(latex_content)

        latex_document.append("\\end{document}")

        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("\n".join(latex_document))

        print(Fore.GREEN + f"LaTeX file generated: {output_file}")

        # Ask if the user wants to translate another directory or exit
        repeat = input("Do you want to translate another directory? (y/n) -> ").lower()
        if repeat != 'y':
            print("Exiting the program.")
            break

# Starts the entire script
main()