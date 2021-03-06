import React, { useState } from "react";
import { DownloadIcon } from "../Icon/Icons";
import { colors } from "../../styles";
import { Spacer, Column } from "@styled";
import { Input } from "./Input";
import { withA11y } from "@storybook/addon-a11y";

const downloadIcon = <DownloadIcon height={25} width={25} />;

/**
 * <Inputs />
 */
const Inputs: React.FC = () => {
  const [age, setAge] = useState<number | undefined | string>();
  const [name, setName] = useState<number | undefined | string>();
  const [email, setEmail] = useState<number | undefined | string>();
  const [password, setPassword] = useState<number | undefined | string>();
  const [phone, setPhone] = useState<number | undefined | string>();

  return (
    <Column bg={colors.background.main} width={"100%"}>
      <form>
        <Spacer pb={3} />
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
        <Spacer pb={3} />
        <Input
          icon={downloadIcon}
          label={"First name"}
          name="name"
          type="text"
          value={name}
          required
          onInputChange={(name) => setName(name)}
        />
        <Spacer pb={3} />
        <Input
          label={"email"}
          name="email"
          type="email"
          value={email}
          disabled
          onInputChange={(email) => setEmail(email)}
        />
        <Spacer pb={3} />
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
        <Spacer pb={3} />
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
        <Spacer pb={3} />
        <button type="submit">submit</button>
      </form>
    </Column>
  );
};

export { Inputs };

export default {
  title: "Input",
  component: Input,
  decorators: [withA11y],
};
