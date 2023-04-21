import React from "react";
import Navbar from "../molecules/Navbar.molecules";
import AccountForm from "../organism/AccountForm.organism";
import CreateAccountTitle from "../molecules/CreateAccount.molecules";

const CreateAccount = () => {
  return (
    <div>
      <Navbar />
      <CreateAccountTitle />
      <AccountForm />
    </div>
  );
};

export default CreateAccount;
