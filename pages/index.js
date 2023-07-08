import Layout from "../components/layout";
import Heading from "../components/heading";
import FormComponent from "../components/FormComponent";
import { useState } from "react";
import DisplayComponent from "../components/DisplayComponent";

const Index = () => {
  const [age, setAge] = useState({years: "- -", months: "- -", days: "- -"});

  return (
    <>
      <Heading title={"Age Calculator"} />
      <Layout>
        <div className="centered-content">
          <div className="content-wrapper white">
            <FormComponent setAge={setAge} />
            <DisplayComponent age={age} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
