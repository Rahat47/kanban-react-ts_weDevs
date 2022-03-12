import {
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from "@heroicons/react/outline";

export const navigation = [
    { name: "Dashboard", href: "", icon: HomeIcon },
    { name: "Team", href: "team", icon: UsersIcon },
    { name: "Projects", href: "projects", icon: FolderIcon },
    { name: "Reports", href: "reports", icon: ChartBarIcon },
];
