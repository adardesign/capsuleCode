import React, { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../../components/template/layout";
import CitiesViewer from "./cities";


const Cities = ({ }) => {
  return (
    <Layout
      header={{ name: "Cities" }}
      classNames={{ header: "cities-head", body: "cities" }}
    >
      <CitiesViewer />
    </Layout>
  );
};

const mapStateToProps = (state) => { };

const mapDispatchToProps = (dispatch) => { };
export default Cities;

// export default connect(mapStateToProps, mapDispatchToProps)(Cities);
