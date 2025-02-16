// Matteo Garzon

class customNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <div>
                <button class="navbar-toggler toggleButton" id="toggleButton" type="button">
                    <span class="navbar-toggler-icon"></span>
                    <a class="navbar-brand navbar-text text-white" href="../../index.html">
                        <img src="../../assets/favicon.ico" alt="YoUnix" width="30" height="30" class="d-inline-block align-text-center">
                        YoUnix
                    </a>
                </button>
            </div>
            <div class="dropdown">
                <form class="d-flex" role="search" autocomplete="off">
                    <input class="form-control me-2 dropdown-toggle" type="search" id="search" placeholder="Search" aria-label="Search">
                </form>
                <ul class="dropdown-menu" id="results-search">
                </ul>
            </div>
        </div>
    </nav>

    <div class="navbar vertical-navbar" id="navbar">
        <a href="/html/history.html">History</a>
        <div class="dropdown">
            <a href="#dropdown-content" class="menu-toggle">File and Directory Management <span class="arrow">▼</span></a>
            <div class="dropdown-content">
                <a href="/html/file_directory_management/fdm_cd.html">cd - Change directory</a>
                <a href="/html/file_directory_management/fdm_cp.html">cp - Copy files or directories</a>
                <a href="/html/file_directory_management/fdm_locate.html">locate - Find files and directories</a>
                <a href="/html/file_directory_management/fdm_ls.html">ls - List directory contents</a>
                <a href="/html/file_directory_management/fdm_mkdir.html">mkdir - Create a new directory</a>
                <a href="/html/file_directory_management/fdm_mv.html">mv - Move or rename files or directories</a>
                <a href="/html/file_directory_management/fdm_pwd.html">pwd - Print current directory</a>
                <a href="/html/file_directory_management/fdm_rm.html">rm - Remove files or directories</a>
                <a href="/html/file_directory_management/fdm_usermod.html">usermod - Modifies existing user's account settings</a>
                <a href="/html/file_directory_management/fdm_touch.html">touch - Create an empty file or update file timestamp</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="#dropdown-content" class="menu-toggle">File Content Viewing and Editing<span class="arrow">▼</span></a>
            <div class="dropdown-content">
                <a href="/html/file_content_viewing_editing/fcve_cat.html">cat - Concatenate and display file content</a>
                <a href="/html/file_content_viewing_editing/fcve_comm.html">comm - Compare sorted files</a>
                <a href="/html/file_content_viewing_editing/fcve_diff.html">diff - Compare files</a>
                <a href="/html/file_content_viewing_editing/fcve_head.tail.html">head / tail - Display the beginning or end of files</a>
                <a href="/html/file_content_viewing_editing/fcve_nano">nano - Text editor for editing files directly in the terminal</a>
                <a href="/html/file_content_viewing_editing/fcve_wc.html">wc - Word count</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="#dropdown-content" class="menu-toggle">Text Processing<span class="arrow">▼</span></a>
            <div class="dropdown-content">
                <a href="/html/text_processing/tp_awk.html">awk - Search for text in files</a>
                <a href="/html/text_processing/tp_cut.html">cut - Remove sections of each line in a file</a>
                <a href="/html/text_processing/tp_find.html">find - Remove sections of each line in a file</a>
                <a href="/html/text_processing/tp_grep.html">grep - Search for text in files</a>
                <a href="/html/text_processing/tp_sed.html">sed - Stream editor for searching and replacing text</a>
                <a href="/html/text_processing/tp_sort.html">sort - Sort lines of text files</a>
                <a href="/html/text_processing/tp_tr.html">tr - Translate or delete characters</a>
                <a href="/html/text_processing/tp_uniq.html">uniq - Remove duplicate lines from sorted files</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="#dropdown-content" class="menu-toggle">File Permissions and Ownership<span class="arrow">▼</span></a>
            <div class="dropdown-content">
                <a href="/html/file_permission_ownership/fpo_chattr.html">chattr - Change file attributes</a>
                <a href="/html/file_permission_ownership/fpo_chgrp.html">chgrp - Change file group ownership</a>
                <a href="/html/file_permission_ownership/fpo_chmod.html">chmod - Change file permissions</a>
                <a href="/html/file_permission_ownership/fpo_chown.html">chown - Change file owner and group</a>
                <a href="/html/file_permission_ownership/fpo_getfacl.html">getfacl - Display ACL</a>
                <a href="/html/file_permission_ownership/fpo_setfacl.html">setfacl - Set ACL</a>
                <a href="/html/file_permission_ownership/fpo_stat.html">stat - Display information about files and file systems</a>
                <a href="/html/file_permission_ownership/fpo_umask.html">umask - Set default file permissions</a>
            </div>
        </div>

        <div class="dropdown">
            <a href="#dropdown-content" class="menu-toggle">Compression and Archiving<span class="arrow">▼</span></a>
            <div class="dropdown-content">
                <a href="/html/compressing_archiving/ca_tar.html">tar</a>
                <a href="/html/compressing_archiving/ca_gunzip.html">gunzip</a>
                <a href="/html/compressing_archiving/ca_gzip.html">gzip</a>
                <a href="/html/compressing_archiving/ca_zip.html">zip</a>
                <a href="/html/compressing_archiving/ca_bzip2.html">bzip2</a>
            </div>
        </div>

        <div class="dropdown">
            <a href="#dropdown-content" class="menu-toggle">System Monitoring and Management<span class="arrow">▼</span></a>
            <div class="dropdown-content">
                <a href="#dropdown-content" class="menu-toggle">System info<span class="arrow">▼</span></a>
                <div class="dropdown-content">
                    <a href="/html/system_monitoring_management/smm_ps.html">ps - Display information about active processes</a>
                    <a href="/html/system_monitoring_management/smm_top.html">top - Display real-time process information</a>
                    <a href="/html/system_monitoring_management/smm_df.html">df - Show disk space usage</a>
                    <a href="/html/system_monitoring_management/smm_du.html">du - Estimate file and directory space usage</a>
                    <a href="/html/system_monitoring_management/smm_uptime.html">uptime - Show how long the system has been running</a>
                    <a href="/html/system_monitoring_management/smm_system_profiler.html">system_profiler - Provide detailed system information</a>
                    <a href="/html/system_monitoring_management/smm_uname.html">uname - Provide system information</a>
                    <a href="/html/system_monitoring_management/smm_sysctl.html">sysctl - View and modify kernel parameters at runtime</a>
                    <a href="/html/system_monitoring_management/smm_iostat.html">iostat - Provide input/output statistics</a>
                    <a href="/html/system_monitoring_management/smm_pmset.html">pmset - Manage power settings</a>
                    <a href="/html/system_monitoring_management/smm_watch.html">watch - Runs a command repeatedly at specified intervals</a>
                </div>
                <a href="#dropdown-content" class="menu-toggle">System Shutdown and Reboot<span class="arrow">▼</span></a>
                <div class="dropdown-content">
                    <a href="/html/system_monitoring_management/smm_shutdown.html">shutdown - Bring down the system safely</a>
                    <a href="/html/system_monitoring_management/smm_reboot.html">reboot - Reboot the system</a>
                    <a href="/html/system_monitoring_management/smm_halt.html">halt - Stop the system</a>
                    <a href="/html/system_monitoring_management/smm_poweroff.html">poweroff - Power off the system</a>
                    <a href="/html/system_monitoring_management/smm_caffeinate.html">caffeinate - Prevent the system from sleeping</a>
                </div>
                <a href="#dropdown-content" class="menu-toggle">Job Control<span class="arrow">▼</span></a>
                <div class="dropdown-content">
                    <a href="/html/system_monitoring_management/smm_jobs.html">jobs - List active jobs</a>
                    <a href="/html/system_monitoring_management/smm_kill.html">kill - Terminate a process by PID</a>
                    <a href="/html/system_monitoring_management/smm_bg.html">bg - Run a job in the background</a>
                    <a href="/html/system_monitoring_management/smm_fg.html">fg - Run a job in the foreground</a>
                    <a href="/html/system_monitoring_management/smm_ctrl+key.html">Control Keys - Some shortcuts to make life easier</a>
                    <a href="/html/system_monitoring_management/smm_ulimit.html">ulimit - Set or display user process limits</a>
                    <a href="/html/system_monitoring_management/smm_pgrep.html">pgrep - Set or display user process limits</a>
                    <a href="/html/system_monitoring_management/smm_nice.html">nice - Set a process's priority</a>
                    <a href="/html/system_monitoring_management/smm_nohup.html">nohup - Run a command after logout)</a>
                    <a href="/html/system_monitoring_management/smm_renice.html">renice - Change the priority of a running process</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <a href="#dropdown-content" class="menu-toggle">User and Group Management<span class="arrow">▼</span></a>
            <div class="dropdown-content">
                <a href="/html/user_group_management/ugm_useradd.html">useradd - Add a user</a>
                <a href="/html/user_group_management/ugm_userdel.html">userdel - Delete a user</a>
                <a href="/html/user_group_management/ugm_passwd.html">passwd - Change user password</a>
                <a href="/html/user_group_management/ugm_who.html">who - Display who is logged in to the system</a>
                </div>
        </div>
        <div class="dropdown">
            <a href="#dropdown-content" class="menu-toggle">Networking<span class="arrow">▼</span></a>
            <div class="dropdown-content">
                <a href="/html/networking/n_curl.html">curl - Transfer data from or to a server</a>
                <a href="/html/networking/n_ping.html">ping - Check network connectivity</a>
                <a href="/html/networking/n_ifconfig.html">ifconfig - Display or configure network interfaces</a>
                <a href="/html/networking/n_ip.html">ip - Display or configure network interfaces</a>
                <a href="/html/networking/n_netstat.html">netstat - Display network connections, routing tables, etc.</a>
                <a href="/html/networking/n_ssh.html">ssh - Secure Shell for remote login</a>
                <a href="/html/networking/n_dig.html">dig - Query DNS (Domain Name System) for information</a>
                <a href="/html/networking/n_nslookup.html">nslookup - Query DNS to obtain domain or IP address information</a>
                <a href="/html/networking/n_traceroute.html">traceroute - Trace the path packets take to a network host</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="#dropdown-content" class="menu-toggle">Environment Management<span class="arrow">▼</span></a>
            <div class="dropdown-content">
                <a href="/html/environment_management/em_export.html">export - Set environment variables</a>
                <a href="/html/environment_management/em_env.html">env - Display or modify environment variables</a>
                <a href="/html/environment_management/em_alias.html">alias - Create shortcuts for commands</a>
                <a href="/html/environment_management/em_unset.html">unset - Remove environment variables</a>
                <a href="/html/environment_management/em_set.html">set - Configure or display shell variables and environment settings</a>
                <a href="/html/environment_management/em_printenv.html">printenv - Manage and control print jobs and printers</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="#dropdown-content" class="menu-toggle">Package Management<span class="arrow">▼</span></a>
            <div class="dropdown-content">
                <a href="/html/package_management/pm_apt.html">apt - Install, remove, and manage packages</a>
                <a href="/html/package_management/pm_yum.html">yum - Manage packages</a>
                <a href="/html/package_management/pm_brew.html">brew - Homebrew package manager</a>
                <a href="/html/package_management/pm_pacman.html">pacman - Package manager</a>
                <a href="/html/package_management/pm_pip.html">pip - Install and manage Python packages from the Python Package Index (PyPI)</a>
            </div>
        </div>
    </div>
        `
    }
}

class customFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bd-footer bg-dark py-5 mt-2">
                <div class="container py-3">
                    <div class="row">
                        <div class="col-lg-3 mb-3">
                            <a class="d-inline-flex align-items-center mb-2 text-decoration-none" href="/index.html"
                                aria-label="YoUnix">
                                <img src="../../assets/favicon.ico" alt="YoUnix" width="40" height="40" class="d-block me-2">
                                    <h5 class="fs-5" id="footer-title">YoUnix</h5>
                            </a>
                            <ul class="list-unstyled small">
                                <li class="mb-2">Because YoU can learn Unix.</li>
                                <hr>
                                    <li class="mb-2">Made with love in <a
                                        href="http://usi.ch">Università della Svizzera Italiana</a>.</li>
                                    <li class="mb-2">Code and Docs: <a
                                        href="https://creativecommons.org/licenses/by/3.0/" target="_blank"
                                        rel="license noopener">CC BY 3.0</a>.</li>
                            </ul>
                        </div>
                        <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                            <h5>Links</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2"><a href="/html/credits.html">Credits</a></li>
                                <li class="mb-2"><a target="_blank" href="https://github.com/Cayman18/unix_shell">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define('custom-navbar', customNavbar);
customElements.define('custom-footer', customFooter);