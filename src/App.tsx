import * as React from "react";
import Typography from "@mui/material/Typography";
import MenuBar from "@/features/menu-bar";
import Explorer from "@/features/explorer";
import ListItem from "@/components/list-item";
import Card from "@/components/card";
import Tabs from "@/components/tabs";
import Tab from "@/components/tab";
import FilesIcon from "@/components/icons/files";
import SegoeFluentIcon from "@/components/segoe-fluent-icon";
import { styled } from "@mui/material/styles";
import "./App.css";

const FlexBox = styled("div")({
  display: "flex",
});

const ActivityBar = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 48,
});

const StyledListItem = styled(ListItem)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 40,
  height: 40,
  margin: 0,
  marginBottom: 4,
});

const SideBar = styled(Card)({
  flexShrink: 0,
  width: 230,
});

const SideBarHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 12,
  ...(theme.palette.mode === "light" && {
    borderBottom: "1px solid rgba(0, 0, 0, 0.0578)",
  }),
  ...(theme.palette.mode === "dark" && {
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  }),
}));

const SideBarContent = styled("div")({
  padding: 12,
});

const DragBar = styled("div")({
  border: "1px solid transparent",
  cursor: "e-resize",
});

const StatusBar = styled("div")({
  height: 30,
});

function App() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const targetRef = React.useRef<HTMLDivElement>(null);
  const dragBarRef = React.useRef<HTMLDivElement>(null);
  const startPosition = React.useRef(0);
  const startWidth = React.useRef(0);
  React.useEffect(() => {
    const dragBar = dragBarRef.current;
    const target = targetRef.current;
    if (dragBar && target) {
      const handleStopDrag = (ev: MouseEvent) => {
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", handleDrag);
        document.body.style.cursor = "default";
      };
      const handleDrag = (ev: MouseEvent) => {
        const movement = ev.clientX - startPosition.current;
        const endWidth = startWidth.current + movement;
        target.style.width = `${endWidth}px`;
      };
      const handleBeginDrag = (ev: MouseEvent) => {
        ev.preventDefault();
        startPosition.current = ev.clientX;
        startWidth.current = target.offsetWidth;
        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", handleStopDrag);
        document.body.style.cursor = "e-resize";
      };
      dragBar.addEventListener("mousedown", handleBeginDrag);
      return () => {
        dragBar.removeEventListener("mousedown", handleBeginDrag);
      };
    }
  }, []);

  return (
    <FlexBox sx={{ flexDirection: "column", height: "100vh" }}>
      <MenuBar />
      <FlexBox sx={{ flex: 1 }}>
        <ActivityBar>
          <StyledListItem selected={selectedIndex === 0} onClick={() => setSelectedIndex(0)}>
            <FilesIcon fontSize="small" />
          </StyledListItem>
          <StyledListItem selected={selectedIndex === 1} onClick={() => setSelectedIndex(1)}>
            <SegoeFluentIcon name="Search" sx={{ fontSize: 20 }} />
          </StyledListItem>
        </ActivityBar>
        <SideBar ref={targetRef}>
          <SideBarHeader>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Explorer
            </Typography>
            <SegoeFluentIcon name="More" />
          </SideBarHeader>
          <SideBarContent>
            <FlexBox role="tabpanel" hidden={selectedIndex !== 0} sx={{ flexDirection: "column" }}>
              <Explorer />
            </FlexBox>
          </SideBarContent>
        </SideBar>
        <DragBar ref={dragBarRef} />
        <FlexBox sx={{ flex: 1, overflowX: "auto" }}>
          <Tabs>
            <Tab>Text</Tab>
            <Tab>Text</Tab>
            <Tab>Text</Tab>
          </Tabs>
        </FlexBox>
      </FlexBox>
      <StatusBar></StatusBar>
    </FlexBox>
  );
}

export default App;
