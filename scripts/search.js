// Matteo Garzon

// for link, absolute path is used to ensure 
const search = [
    // Compressing and archiving
    {
        command: 'bzip2',
        link: '/YoUnix/html/compressing_archiving/ca_bzip2.html'
    },
    {
        command: 'gunzip',
        link: '/YoUnix/html/compressing_archiving/ca_gunzip.html'
    },
    {
        command: 'gzip',
        link: '/YoUnix/html/compressing_archiving/ca_gzip.html'
    },
    {
        command: 'tar',
        link: '/YoUnix/html/compressing_archiving/ca_tar.html'
    },
    {
        command: 'zip',
        link: '/YoUnix/html/compressing_archiving/ca_zip.html'
    },

    // Environment Managment
    {
        command: 'alias',
        link: '/YoUnix/html/environment_management/em_alias.html'
    },
    {
        command: 'env',
        link: '/YoUnix/html/environment_management/em_env.html'
    },
    {
        command: 'export',
        link: '/YoUnix/html/environment_management/em_export.html'
    },
    {
        command: 'printenv',
        link: '/YoUnix/html/environment_management/em_printenv.html'
    },
    {
        command: 'set',
        link: '/YoUnix/html/environment_management/em_set.html'
    },
    {
        command: 'unset',
        link: '/YoUnix/html/environment_management/em_unset.html'
    },

    // File Content Viewing and Editing
    {
        command: 'cat',
        link: '/YoUnix/html/file_content_viewing_editing/fcve_cat.html'
    },
    {
        command: 'comm',
        link: '/YoUnix/html/file_content_viewing_editing/fcve_comm.html'
    },
    {
        command: 'diff',
        link: '/YoUnix/html/file_content_viewing_editing/fcve_diff.html'
    },
    {
        command: 'head tail',
        link: '/YoUnix/html/file_content_viewing_editing/fcve_head.tail.html'
    },
    {
        command: 'nano',
        link: '/YoUnix/html/file_content_viewing_editing/fcve_nano.html'
    },
    {
        command: 'wc',
        link: '/YoUnix/html/file_content_viewing_editing/fcve_wc.html'
    },

    // File Directory
    {
        command: 'cd',
        link: '/YoUnix/html/file_directory_management/fdm_cd.html'
    },
    {
        command: 'cp',
        link: '/YoUnix/html/file_directory_management/fdm_cp.html'
    },
    {
        command: 'locate',
        link: '/YoUnix/html/file_directory_management/fdm_locate.html'
    },
    {
        command: 'ls',
        link: '/YoUnix/html/file_directory_management/fdm_ls.html'
    },
    {
        command: 'mkdir',
        link: '/YoUnix/html/file_directory_management/fdm_mkdir.html'
    },
    {
        command: 'mv',
        link: '/YoUnix/html/file_directory_management/fdm_mv.html'
    },
    {
        command: 'pwd',
        link: '/YoUnix/html/file_directory_management/fdm_pwd.html'
    },
    {
        command: 'rm',
        link: '/YoUnix/html/file_directory_management/fdm_rm.html'
    },
    {
        command: 'user mod',
        link: '/YoUnix/html/file_directory_management/fdm_sudousermod.html'
    },
    {
        command: 'touch',
        link: '/YoUnix/html/file_directory_management/fdm_touch.html'
    },

    // File Permission Ownership
    {
        command: 'chattr',
        link: '/YoUnix/html/file_permission_ownership/fpo_chattr.html'
    },
    {
        command: 'chgrp',
        link: '/YoUnix/html/file_permission_ownership/fpo_chgrp.html'
    },
    {
        command: 'chmod',
        link: '/YoUnix/html/file_permission_ownership/fpo_chmod.html'
    },
    {
        command: 'chwon',
        link: '/YoUnix/html/file_permission_ownership/fpo_chwon.html'
    },
    {
        command: 'getfacl',
        link: '/YoUnix/html/file_permission_ownership/fpo_getfacl.html'
    },
    {
        command: 'setfacl',
        link: '/YoUnix/html/file_permission_ownership/fpo_setfacl.html'
    },
    {
        command: 'stat',
        link: '/YoUnix/html/file_permission_ownership/fpo_stat.html'
    },
    {
        command: 'umask',
        link: '/YoUnix/html/file_permission_ownership/fpo_umask.html'
    },


    // Networking
    {
        command: 'curl',
        link: '/YoUnix/html/networking/n_curl.html'
    },
    {
        command: 'dig',
        link: '/YoUnix/html/networking/n_dig.html'
    },
    {
        command: 'ifconfig',
        link: '/YoUnix/html/networking/n_ifconfig.html'
    },
    {
        command: 'ip',
        link: '/YoUnix/html/networking/n_ip.html'
    },
    {
        command: 'netstat',
        link: '/YoUnix/html/networking/n_netstat.html'
    },
    {
        command: 'nslookup',
        link: '/YoUnix/html/networking/n_nslookup.html'
    },
    {
        command: 'ping',
        link: '/YoUnix/html/networking/n_ping.html'
    },
    {
        command: 'ssh',
        link: '/YoUnix/html/networking/n_ssh.html'
    },
    {
        command: 'traceroute',
        link: '/YoUnix/html/networking/n_traceroute.html'
    },

    // Package Management
    {
        command: 'apt',
        link: '/YoUnix/html/package_management/pm_apt.html'
    },
    {
        command: 'brew',
        link: '/YoUnix/html/package_management/pm_brew.html'
    },
    {
        command: 'dpkg',
        link: '/YoUnix/html/package_management/pm_dpkg.html'
    },
    {
        command: 'pacman',
        link: '/YoUnix/html/package_management/pm_pacman.html'
    },
    {
        command: 'pip',
        link: '/YoUnix/html/package_management/pm_piè.html'
    },
    {
        command: 'yum',
        link: '/YoUnix/html/package_management/pm_yum.html'
    },

    // System Monitoring Management
    {
        command: 'bg',
        link: '/YoUnix/html/system_monitoring_management/smm_bg.html'
    },
    {
        command: 'caffeniate',
        link: '/YoUnix/html/system_monitoring_management/smm_caffeniate.html'
    },
    {
        command: 'ctrl+key',
        link: '/YoUnix/html/system_monitoring_management/smm_ctrl+key.html'
    },
    {
        command: 'df',
        link: '/YoUnix/html/system_monitoring_management/smm_df.html'
    },
    {
        command: 'du',
        link: '/YoUnix/html/system_monitoring_management/smm_du.html'
    },
    {
        command: 'fg',
        link: '/YoUnix/html/system_monitoring_management/smm_fg.html'
    },
    {
        command: 'halt',
        link: '/YoUnix/html/system_monitoring_management/smm_halt.html'
    },
    {
        command: 'iostat',
        link: '/YoUnix/html/system_monitoring_management/smm_iostat.html'
    },
    {
        command: 'jobs',
        link: '/YoUnix/html/system_monitoring_management/smm_jobs.html'
    },
    {
        command: 'kill',
        link: '/YoUnix/html/system_monitoring_management/smm_kill.html'
    },
    {
        command: 'nice',
        link: '/YoUnix/html/system_monitoring_management/smm_nice.html'
    },
    {
        command: 'nohup',
        link: '/YoUnix/html/system_monitoring_management/smm_nohup.html'
    },
    {
        command: 'pgrep',
        link: '/YoUnix/html/system_monitoring_management/smm_pgrep.html'
    },
    {
        command: 'pmset',
        link: '/YoUnix/html/system_monitoring_management/smm_pmset.html'
    },
    {
        command: 'poweroff',
        link: '/YoUnix/html/system_monitoring_management/smm_poweroff.html'
    },
    {
        command: 'ps',
        link: '/YoUnix/html/system_monitoring_management/smm_ps.html'
    },
    {
        command: 'reboot',
        link: '/YoUnix/html/system_monitoring_management/smm_reboot.html'
    },
    {
        command: 'renice',
        link: '/YoUnix/html/system_monitoring_management/smm_renice.html'
    },
    {
        command: 'shutdown',
        link: '/YoUnix/html/system_monitoring_management/smm_shutdown.html'
    },
    {
        command: 'sysctl',
        link: '/YoUnix/html/system_monitoring_management/smm_sysctl.html'
    },
    {
        command: 'system_profiler',
        link: '/YoUnix/html/system_monitoring_management/smm_system_profiler.html'
    },
    {
        command: 'top',
        link: '/YoUnix/html/system_monitoring_management/smm_top.html'
    },
    {
        command: 'ulimit',
        link: '/YoUnix/html/system_monitoring_management/smm_ulimit.html'
    },
    {
        command: 'uname',
        link: '/YoUnix/html/system_monitoring_management/smm_uname.html'
    },
    {
        command: 'uptime',
        link: '/YoUnix/html/system_monitoring_management/smm_uptime.html'
    },
    {
        command: 'watch',
        link: '/YoUnix/html/system_monitoring_management/smm_watch.html'
    },

    // Text Processing
    {
        command: 'awk',
        link: '/YoUnix/html/text_processing/tp_awk.html'
    },
    {
        command: 'cut',
        link: '/YoUnix/html/text_processing/tp_cut.html'
    },
    {
        command: 'find',
        link: '/YoUnix/html/text_processing/tp_find.html'
    },
    {
        command: 'grep',
        link: '/YoUnix/html/text_processing/tp_grep.html'
    },
    {
        command: 'sed',
        link: '/YoUnix/html/text_processing/tp_sed.html'
    },
    {
        command: 'sort',
        link: '/YoUnix/html/text_processing/tp_sort.html'
    },
    {
        command: 'tr',
        link: '/YoUnix/html/text_processing/tp_tr.html'
    },
    {
        command: 'uniq',
        link: '/YoUnix/html/text_processing/tp_uniq.html'
    },

    // User and Group Management
    {
        command: 'passwd',
        link: '/YoUnix/html/user_group_management/ugm_passwd.html'
    },
    {
        command: 'useradd',
        link: '/YoUnix/html/user_group_management/ugm_useradd.html'
    },
    {
        command: 'userdel',
        link: '/YoUnix/html/user_group_management/ugm_userdel.html'
    },

    // Other 
    {
        command: 'history',
        link: '/YoUnix/html/history.html'
    },
    {
        command: 'credits',
        link: 'html/credits.html'
    }
]

const inputSearch = document.querySelector('#search');
const resultsSearch = document.querySelector('#results-search');
resultsSearch.classList.add("d-none"); // if d-none is applied on HTML, resultsSearch is null

function noResults() {
    // create an element for the error; a list item ("li")
    const error = document.createElement('li');
    // adding a class name of "error-message" to our error element
    error.classList.add("dropdown-item");
    error.innerHTML = "No results found."
    resultsSearch.appendChild(error)
}

function setList(results) {
    clearList()
    resultsSearch.classList.remove("d-none");
    for (const search of results) {
        const resultItem = document.createElement('a');

        resultItem.classList.add("dropdown-item", "link-underline", "link-underline-opacity-0");
        resultItem.href = search.link;
        resultItem.innerHTML = search.command;

        resultsSearch.appendChild(resultItem);
    }

    if (results.length === 0) {
        noResults()
    }
}

function clearList() {
    // looping through each child of the search results list and remove each child
    while (resultsSearch.firstChild) {
        resultsSearch.removeChild(resultsSearch.firstChild)
    }
    resultsSearch.classList.add("d-none");
}

inputSearch.addEventListener("input", (event) => {
    clearList()
    // text typed in search bar
    let value = event.target.value;
    if (value.length > 1) {
        resultsSearch.classList.remove("d-none");
    }

    // check if input exists and if is larger than 1 (no command exists that 1 letter only!)
    if (value && value.trim().length > 1) {
        // redefine 'value' to exclude white space and change input to all lowercase
        value = value.trim().toLowerCase()

        //returning only the results of setList if the value of the search is included in the person's name
        setList(search.filter(search => {
            return search.command.includes(value)
        }))
    }
})