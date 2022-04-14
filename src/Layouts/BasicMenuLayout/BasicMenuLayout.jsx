import Menu from "../../Components/MenuComponent";

export default function BasicLayout({ children,searchFunction }) {
  return (
    <>
      <Menu searchFunction={searchFunction}></Menu>
      {children}
    </>
  );
}
