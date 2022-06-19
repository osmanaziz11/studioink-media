import { useRouter } from "next/router";
import Layout from "../../components/Layout";

// Import Css Modules
import style from "../../styles/packages.module.css";

const Package = () => {
  const router = useRouter();
  const { slug } = router.query;
  return <Layout title={`Rates - Wedding Price`}></Layout>;
};

export default Package;
