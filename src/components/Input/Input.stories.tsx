import React, { useState, ReactText } from "react";
import { action } from "@storybook/addon-actions";
import { DownloadIcon } from "../Icon/Icons";
import { Color } from "../../theme/util";
import { Spacer, Column } from "../../theme/custom-styled-components";
import { Input } from "./Input";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "Input",
  component: Input,
  decorators: [withA11y],
};

const downloadIcon = <DownloadIcon height={25} width={25} />;

export const Inputs: React.FunctionComponent = () => {
  const [age, setAge] = useState<number | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [phone, setPhone] = useState<number | undefined>();

  const validateInputs = () => {};

  return (
    <Column bg={Color.BackgroundMain}>
      <form>
        <Spacer pb={5} />
        <Input label={"Age"} name="age" type="number" value={age} required onInputChange={(age) => setAge(age)} />
        <Spacer pb={5} />
        <Input
          icon={downloadIcon}
          label={"Color"}
          name="color"
          type="text"
          value={name}
          required
          onInputChange={(name) => setName(name)}
        />
        <Spacer pb={5} />
        <Input
          label={"email"}
          name="email"
          type="email"
          value={email}
          required
          onInputChange={(email) => setEmail(email)}
        />
        <Spacer pb={5} />
        <Input
          errorText={"Password should be at least 8 characters long "}
          hasError={password ? password.length < 8 : false}
          label={"password"}
          name="password"
          type="password"
          value={password}
          required
          onInputChange={(password) => setPassword(password)}
        />
        <Spacer pb={5} />
        <Input
          errorText={"Phone number should have ...  "}
          hasError={!phone}
          label={"phone number"}
          name="phone"
          type="tel"
          value={phone}
          required
          onInputChange={(phone) => setPhone(phone)}
        />
        <Spacer pb={5} />
        <button type="submit">submit</button>
      </form>
    </Column>
  );
};
