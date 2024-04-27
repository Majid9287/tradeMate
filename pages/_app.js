import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { setUserLoggedIn } from "../redux/userSlice";
import { setAdminStatus } from "../redux/userSlice";
import { getSession, SessionProvider } from "next-auth/react";

import FloatingButton from "../components/ChatButton";
export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Define a list of routes that should not display Navbar and Footer (your admin pages).
  const adminRoutes = [
    "/adminDashboard/message/list",
    "/adminDashboard/enrolled/list",
    "/adminDashboard/enrolled/assignment-list/[id]",
    "/adminDashboard/user/list",
    "/adminDashboard/user/[email]",
    "/adminDashboard/user/update/[email]",
    "/adminDashboard",
    "/adminDashboard/blog/create",
    "/adminDashboard/blog/list",
    "/adminDashboard/blog/update/[id]",
    "/adminDashboard/blog/update",
    "/adminDashboard/user/users",
    "/adminDashboard/category/create",
    "/adminDashboard/introduction/list",
    "/adminDashboard/introduction/create",
    "/adminDashboard/introduction/update",
    "/adminDashboard/course/create",
    "/adminDashboard/course/list",
    "/adminDashboard/course/chapters/[id]",
    "/adminDashboard/course/update/[courseId]/[chapterId]",
    "/adminDashboard/course/update-course/[courseId]",
  ]; // Add the routes for your admin pages here.
  const isOnchat=[ "/chat/[chatId]",]
  // Check if the current route is in the list of adminRoutes.
  const isOnAdminPage = adminRoutes.includes(router.pathname);
  useEffect(() => {
    const checkAdminStatus = async () => {
      const session = await getSession();
      if (session && session.user.name) {
        store.dispatch(setUserLoggedIn(true));
      }
      if (session && session.user.role === "admin") {
        store.dispatch(setAdminStatus(true));
      }
    };

    checkAdminStatus();
  }, [router]);

  return (
    <SessionProvider session={pageProps.session}>
     <Provider store={store}> {!isOnAdminPage && <Navbar />}
      
        <Component {...pageProps} />
        {!isOnchat &&  <FloatingButton/>}
      {!isOnAdminPage &&!isOnchat &&<Footer />}</Provider>
    </SessionProvider>
  );
}
