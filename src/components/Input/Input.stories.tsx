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
  const [age, setAge] = useState<number | undefined | string>();
  const [name, setName] = useState<number | undefined | string>();
  const [email, setEmail] = useState<number | undefined | string>();
  const [password, setPassword] = useState<number | undefined | string>();
  const [phone, setPhone] = useState<number | undefined | string>();

  return (
    <Column bg={Color.BackgroundMain} width={300}>
      <form>
        <Spacer pb={5} />
        <Input
          errorText={"Age must be at least 18"}
          hasError={age ? age < 18 : false}
          isValid={age ? age >= 18 : false}
          label={"Age"}
          name="age"
          type="number"
          value={age}
          required
          onInputChange={(age) => setAge(age)}
        />
        <Spacer pb={5} />
        {/* Text Input with icon  */}
        <Input
          icon={downloadIcon}
          label={"First name"}
          name="name"
          type="text"
          value={name}
          // isValid
          required
          onInputChange={(name) => setName(name)}
        />
        <Spacer pb={5} />
        <Input
          label={"email"}
          name="email"
          type="email"
          value={email}
          disabled
          onInputChange={(email) => setEmail(email)}
        />
        <Spacer pb={5} />
        <Input
          errorText={"Password should not be 'password'"}
          hasError={password ? password === "password" : false}
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
