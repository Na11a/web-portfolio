import Link from "next/link";

const Sidebar = () => {
	return ( 
		<aside className="sidebar">
			<div className="logo">
				<h2>LOGO</h2>
			</div>
			<Link href="/examples/coins-tracker/dashboard"><i className="fa-solid fa-server"></i>
				Dashboard
			</Link>
			<Link href="/examples/coins-tracker/exchanges">
				<i className="fa-solid fa-chart-line"></i>Exchages
			</Link>
		</aside>
	 );
}
 
export default Sidebar;