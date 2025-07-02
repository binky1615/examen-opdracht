import React from "react";
import { useState, useEffect } from "react";

function Profile() {


  return (
    <div>
      <h1>Hello {localStorage.getItem("userName")}</h1>
    </div>
  );
}

export default Profile;
