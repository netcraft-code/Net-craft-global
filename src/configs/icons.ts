import {
  IconDashboard,
  IconBuilding,            // changed
  IconUsers,
  IconMessageCircle,
} from "@tabler/icons-react";


export const ICON_MAP: Record<string, any> = {
  Dashboard: IconDashboard,
  Cities: IconBuilding, // ya IconBuildingSkyscraper
  Families: IconUsers,  // agar `IconUsersGroup` bhi galat hai, use `IconUsers`
  Chat: IconMessageCircle,
};
