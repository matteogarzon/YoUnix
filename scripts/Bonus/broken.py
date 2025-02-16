#This script will go through using os, the base directory you provide in input once you run the code, and checking for internal (local) non existing links
# or external (websites) non existing links. If it finds any it will print the file and the link that is broken
#Needed libraries to run the code are: os, re (although these are generally already installed with python), requests, beautifulsoup4
#
#To insTall the required packages you must insert in your terminal the following command:
# pip install beautifulsoup4 requests
#
# In order to use the script you must run the script and provide the path of the directory that your website is located
# tip: use vscode as compiler


import os
import re
import requests
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor
from typing import Set, Dict, List

class BrokenLinkChecker:
    def __init__(self, base_directory: str):
        self.base_directory = os.path.abspath(base_directory)
        self.found_links: Set[str] = set()
        self.broken_links: Dict[str, List[str]] = {}  # Maps files to their broken links
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })

    def is_internal_link(self, url: str) -> bool:
        """Check if a URL is internal (relative) or external."""
        return not bool(urlparse(url).netloc)

    def verify_external_link(self, url: str) -> bool:
        """Verify if an external URL is accessible."""
        try:
            response = self.session.head(url, timeout=10)
            if response.status_code == 405:  # Method not allowed
                response = self.session.get(url, timeout=10)
            return response.status_code < 400
        except Exception:
            return False

    def verify_internal_link(self, link: str, source_file: str) -> bool:
        """Verify if an internal link points to an existing file."""
        # Remove fragment identifier if present
        link = link.split('#')[0]
        if not link:  # Empty after removing fragment
            return True

        # Convert the link to an absolute file path
        source_dir = os.path.dirname(source_file)
        if link.startswith('/'):
            target_path = os.path.join(self.base_directory, link.lstrip('/'))
        else:
            target_path = os.path.join(source_dir, link)

        target_path = os.path.normpath(target_path)

        # Check if the target file exists
        if os.path.exists(target_path):
            return True
        # If the path doesn't have an extension, try adding .html
        if not os.path.splitext(target_path)[1]:
            return os.path.exists(target_path + '.html')
        return False

    def check_file(self, filepath: str) -> None:
        """Check a single HTML file for broken links."""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            soup = BeautifulSoup(content, 'html.parser')
            broken_links = []

            # Find all links in the file
            for tag in soup.find_all(['a', 'img', 'script', 'link']):
                # Get the appropriate attribute based on tag type
                url = tag.get('href') or tag.get('src')
                if not url:
                    continue

                # Skip already checked links and special URLs
                if url in self.found_links or url.startswith(('mailto:', 'tel:', 'javascript:')):
                    continue

                self.found_links.add(url)

                # Verify the link
                is_broken = False
                if self.is_internal_link(url):
                    if not self.verify_internal_link(url, filepath):
                        is_broken = True
                else:
                    if not self.verify_external_link(url):
                        is_broken = True

                if is_broken:
                    broken_links.append(url)

            if broken_links:
                rel_path = os.path.relpath(filepath, self.base_directory)
                self.broken_links[rel_path] = broken_links

        except Exception as e:
            print(f"Error processing {filepath}: {str(e)}")

    def scan_website(self) -> None:
        """Scan the entire website directory for broken links."""
        html_files = []
        
        # Find all HTML files
        for root, _, files in os.walk(self.base_directory):
            for file in files:
                if file.endswith('.html'):
                    html_files.append(os.path.join(root, file))

        # Process files in parallel
        with ThreadPoolExecutor(max_workers=10) as executor:
            executor.map(self.check_file, html_files)

    def print_results(self) -> None:
        """Print the results of the broken link check."""
        if not self.broken_links:
            print("No broken links found!")
            return

        print("\nBroken Links Report:")
        print("-" * 50)
        
        for file, links in self.broken_links.items():
            print(f"\nFile: {file}")
            for link in links:
                print(f"  - {link}")
        
        total_broken = sum(len(links) for links in self.broken_links.values())
        print(f"\nTotal broken links found: {total_broken}")
        print(f"Number of files with broken links: {len(self.broken_links)}")

def main():
    # Get the website directory from user input
    website_dir = input("Enter the path to your local website directory: ").strip()
    
    if not os.path.exists(website_dir):
        print("Error: Directory does not exist!")
        return

    print("Scanning for broken links... This may take a while.")
    checker = BrokenLinkChecker(website_dir)
    checker.scan_website()
    checker.print_results()

if __name__ == "__main__":
    main()
