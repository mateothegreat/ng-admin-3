import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '', title: '--- Personal', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '', title: 'Dashboards', icon: 'icon-Car-Wheel', class: 'has-arrow', label: '4', labelClass: 'label label-rouded label-themecolor pull-right', extralink: false,
        submenu: [
            { path: '/dashboard/dashboard1', title: 'Modern', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Classic', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/dashboard/dashboard3', title: 'Analytical', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Apps', icon: 'icon-Double-Circle', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/apps/email', title: 'Mailbox', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/apps/fullcalendar', title: 'Calendar', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/apps/taskboard', title: 'Taskboard', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: '--- UI Components', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '', title: 'Component', icon: 'icon-On-Off-3', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/component/accordion', title: 'Accordion', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/alert', title: 'Alert', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/carousel', title: 'Carousel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/dropdown', title: 'Dropdown', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/modal', title: 'Modal', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/pagination', title: 'Pagination', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/poptool', title: 'Popover & Tooltip', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/progressbar', title: 'Progressbar', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/rating', title: 'Ratings', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/tabs', title: 'Tabs', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/timepicker', title: 'Timepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/buttons', title: 'Button', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/cards', title: 'Card', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Extra Components', icon: 'icon-Box-Open', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/extra-component/toastr', title: 'Toastr', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/extra-component/upload', title: 'File Upload', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/extra-component/editor', title: 'Editor', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/extra-component/dragndrop', title: 'Drag n Drop', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            
        ]
    },
    {
        path: '', title: '--- Forms & Tables', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '', title: 'Forms', icon: 'icon-Receipt-4', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/forms/basicform', title: 'Basic Forms', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/forms/formvalidation', title: 'Form Validation', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/typehead', title: 'Form Typehead', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/datepicker', title: 'Datepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            
        ]
    },
    {
        path: '', title: 'Tables', icon: 'icon-Split-Vertical', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/tables/basictable', title: 'Basic Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/tables/smarttable', title: 'Smart Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/tables/datatable', title: 'Data Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '/widgets', title: 'Widgets', icon: 'icon-Windows-2', class: '', label: '', labelClass: '', extralink: false, submenu: []
    },
    {
        path: '', title: '--- Charts & Icons', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '', title: 'Charts', icon: 'icon-Pie-Chart', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/charts/chartjs', title: 'Chart Js', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/charts/chartistjs', title: 'Chartist Js', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            
        ]
    },
    {
        path: '', title: 'Icons', icon: 'icon-Prater', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/icons/fontawesome', title: 'Fontawesome', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/icons/simpleline', title: 'Simple Line Icons', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/icons/material', title: 'Material Icons', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: '--- Pages', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '', title: 'Authentication', icon: 'icon-Key-Lock', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/authentication/login', title: 'Login', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/authentication/login2', title: 'Login 2', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/authentication/signup', title: 'Register', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/authentication/signup2', title: 'Register 2', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/authentication/404', title: '404', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/authentication/lock', title: 'Lockscreen', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Sample Pages', icon: 'icon-Files', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/sample-pages/timeline', title: 'Timeline', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/sample-pages/profile', title: 'Profile', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/sample-pages/pricing', title: 'Pricing', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/sample-pages/invoice', title: 'Invoice', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/sample-pages/helperclasses', title: 'Helper Classes', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/starter', title: 'Starter Page', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Menu Levels', icon: 'icon-El-Castillo', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: 'javascript:void(0);', title: 'Second Level', icon: '', class: '', label: '', labelClass: '', extralink: true, submenu: [] },
            {
                path: '', title: 'Second Child', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: 'javascript:void(0);', title: 'Third 1.1', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: 'javascript:void(0);', title: 'Third 1.2', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                ]
            },
        ]
    }     
];

