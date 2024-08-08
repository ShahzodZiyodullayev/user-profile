import { Box, Container, Grid } from "@mantine/core";
import type { ReactNode } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

type Props = {
  navbarSlot?: ReactNode;
  headerSlot: ReactNode;
  bottomSlot?: ReactNode;
  announcementSlot?: ReactNode;
  sidebarSlot?: ReactNode;
};

export function Layout(props: Props) {
  return (
    <Box w="100vw" h="100vh" style={{ overflow: "hidden" }}>
      <Grid gutter={0} align="stretch" justify="stretch">
        <Grid.Col span={2.5} bg="rgba(0, 0, 0, 0.1)">
          {props.sidebarSlot && <aside>{props.sidebarSlot}</aside>}
        </Grid.Col>
        <Grid.Col span="auto" h="100vh">
          <Container fluid px={50}>
            {props.headerSlot}
            <Box
              h="calc(100vh - 70px)"
              style={{
                overflow: "scroll",
                overflowX: "hidden",
                // scrollbarWidth: "none",
              }}
            >
              <Outlet />
            </Box>
          </Container>
        </Grid.Col>
        {/* {props.announcementSlot} */}
        {/* {props.navbarSlot} */}

        {/* <footer>
        <div className="text_sm">
        {new Date().getFullYear()}, see source code on{" "}
        <a href="https://github.com/noveogroup-amorgunov/nukeapp">
        github/noveogroup-amorgunov/nukeapp
        </a>
        </div>
        </footer>
        {props.bottomSlot} */}
        <ScrollRestoration />
      </Grid>
    </Box>
  );
}
