import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import CategoriesChart from "@/components/home/CategoriesChart";
import IncomeExpenseChart from "@/components/home/IncomeExpenseChart";
import RecentOrdersTable from "@/components/home/RecentOrdersTable";
import StatisticCards from "@/components/home/StatisticCards";

export default function Home() {
  return (
    <div id="wrapper">
      <SideBar />
      <Header />
      <div className="clearfix"></div>
      <div className="content-wrapper">
        <div className="container-fluid">
          <StatisticCards />
          <div className="row">
            <IncomeExpenseChart />
            <CategoriesChart />
          </div>
          <RecentOrdersTable />
        </div>
      </div>
      <Footer />
    </div>
  );
}
