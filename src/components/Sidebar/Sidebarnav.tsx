import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Stack
            spacing="12"
            align="flex-start"
        >
            <NavSection title="GERAL">
                <NavLink  
                    icon={RiDashboardLine}
                    title="Dashboard"
                    href="/dashboard"
                />
                <NavLink  
                    icon={RiContactsLine}
                    title="Usuários"
                    href="/users"
                />
            </NavSection>

            <NavSection title="AUTOMAÇÃO">
                <NavLink  
                    icon={RiInputMethodLine}
                    title="Formulários"
                    href="/form"
                />
                    <NavLink  
                    icon={RiGitMergeLine}
                    title="Automação"
                    href="/automation"
                />
            </NavSection> 
        </Stack>
    )
}