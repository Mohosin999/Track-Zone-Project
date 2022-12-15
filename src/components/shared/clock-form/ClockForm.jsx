import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";
import { getOffset } from "../../../utils/timezone";
import Button from "../../ui/Button";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Form from "../../ui/Form";

const ClockForm = ({
  values = { title: "", timezone: "UTC", offset: 0 },
  handleClock,
  title,
  edit,
}) => {
  const [formValues, setFormValues] = useState({ ...values });

  useEffect(() => {
    if (TIMEZONE_OFFSET[formValues.timezone]) {
      setFormValues((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formValues.timezone],
      }));
    }
  }, [formValues.timezone]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "offset") {
      value = Number(value) * 60;
    }

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(formValues);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="title">Enter Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          value={formValues.title}
          onChange={handleChange}
          disabled={!title}
        />
      </div>
      <div>
        <Label htmlFor="timezone">Enter Timezone</Label>
        <Select
          id="timezone"
          name="timezone"
          value={formValues.timezone}
          onChange={handleChange}
        >
          <option value="GMT">GMT</option>
          <option value="UTC">UTC</option>
          <option value="PST">PST</option>
          <option value="EST">EST</option>
          <option value="EDT">EDT</option>
          <option value="BST">BST</option>
          <option value="MST">MST</option>
        </Select>
      </div>
      {(formValues.timezone === "GMT" || formValues.timezone === "UTC") && (
        <div>
          <Label htmlFor="offset">Enter Offset</Label>
          <Select
            id="offset"
            name="offset"
            value={formValues.offset / 60}
            onChange={handleChange}
          >
            {getOffset().map((offset) => (
              <option key={offset} value={offset}>
                {offset}
              </option>
            ))}
          </Select>
        </div>
      )}
      <Button>{edit ? "Update" : "Create"}</Button>
    </Form>
  );
};

ClockForm.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
    offset: PropTypes.number.isRequired,
  }),
  handleClock: PropTypes.func.isRequired,
  title: PropTypes.bool,
  edit: PropTypes.bool,
};

ClockForm.defaultProps = {
  title: true,
  edit: false,
};

export default ClockForm;
