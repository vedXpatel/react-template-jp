import React from "react";
import {
  FormField,
  Input,
  GridLayout,
  GridItem,
  FormFieldLabel,
  FormFieldHelperText,
  Display3
} from "@salt-ds/core";

const Login = () => {
  return (
    <GridLayout columns={12} style={{ width: "100vw", height: "100vh",  }}>
      <GridItem colSpan={6} style={{background: 'white'}}></GridItem>
      <GridItem
        colSpan={6}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Display3>Login into Ideation Gateway</Display3>
        <FormField style={{margin: '1.5% 25%', width: '55%'}}>
          <FormFieldLabel>Username</FormFieldLabel>
          <Input defaultValue="Value" />
          <FormFieldHelperText>Please enter your sid</FormFieldHelperText>
        </FormField>
        <FormField style={{margin: '1.5% 25%', width: '55%'}}>
          <FormFieldLabel>Password</FormFieldLabel>
          <Input defaultValue="Value" itemType="password" inputProps={{type: 'password'}} />
          {/* <FormFieldHelperText>Helper text</FormFieldHelperText> */}
        </FormField>
      </GridItem>
    </GridLayout>
  );
};

export default Login;
