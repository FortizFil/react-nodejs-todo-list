import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import {
  Box,
  InputLabel,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { TODO_STATUS } from "../../Constants";

const useStyles = makeStyles((theme) => ({
  editFieldsWrap: {
    width: "100%",
  },
  label: {
    color: "#333333",
    fontWeight: 700,
    fontSize: "14px",
    display: "block",
    marginBottom: "8px",
  },
  textField: {
    width: "100%",
    height: "38.62px",
  },
  formFieldWrap: {
    width: "100%",
  },
  formField: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minHeight: "81px",
  },
  helperText: {
    margin: 0,
  },
}));

const AddOrEditTodoForm = ({ submitForm, handleClose, edit }) => {
  const { currentTodo } = useSelector((state) => state.todos);
  const classes = useStyles();

  const TodoSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name type is required!")
      .test(
        "len",
        "String must be  at least 3 characters and not more than 20",
        (val) => {
          if (val && val.length >= 3 && val.length <= 20) {
            return true;
          }
          return false;
        }
      ),
    description: Yup.string()
      .required("Description is required!")
      .test(
        "len",
        "String must be  at least 3 characters and not more than 255",
        (val) => {
          if (val && val.length >= 3 && val.length <= 255) {
            return true;
          }
          return false;
        }
      ),
  });

  return (
    <Formik
      initialValues={{
        name: currentTodo ? currentTodo.name : "",
        description: currentTodo ? currentTodo.description : "",
        status: currentTodo?.status,
      }}
      validationSchema={TodoSchema}
      onSubmit={submitForm}
    >
      {({
        values: { name, description, status },
        setFieldValue,
        errors,
        touched,
        submitForm,
      }) => (
        <>
          <Form>
            <Box className={classes.formFieldWrap}>
              <Box className={classes.formField}>
                <InputLabel htmlFor="name" className={classes.label}>
                  Name
                </InputLabel>
                <Field
                  name="name"
                  id="name"
                  type="text"
                  variant="outlined"
                  size="small"
                  autoComplete="off"
                  classes={{ root: classes.textField }}
                  value={name}
                  onChange={(e) => setFieldValue("name", e.target.value)}
                  error={errors.name && touched.name}
                  component={TextField}
                  helperText={errors.name && touched.name ? errors.name : ""}
                  FormHelperTextProps={{
                    style: { margin: 0 },
                  }}
                />
              </Box>
            </Box>
            <Box className={classes.formFieldWrap} style={{ marginTop: "5px" }}>
              <Box className={classes.formField}>
                <InputLabel htmlFor="description" className={classes.label}>
                  Description
                </InputLabel>
                <Field
                  name="description"
                  id="description"
                  type="text"
                  variant="outlined"
                  size="small"
                  autoComplete="off"
                  classes={{ root: classes.textField }}
                  value={description}
                  onChange={(e) => setFieldValue("description", e.target.value)}
                  error={errors.description && touched.description}
                  component={TextField}
                  helperText={
                    errors.description && touched.description
                      ? errors.description
                      : ""
                  }
                  FormHelperTextProps={{
                    style: { margin: 0 },
                  }}
                />
              </Box>
            </Box>
            {edit && (
              <Box
                className={classes.formFieldWrap}
                style={{ marginTop: "5px" }}
              >
                <Box className={classes.formField}>
                  <InputLabel htmlFor="status" className={classes.label}>
                    Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    style={{ width: "100%", padding: 0, height: "38.62px" }}
                    onChange={(e) => setFieldValue("status", e.target.value)}
                  >
                    {TODO_STATUS.map((el) => (
                      <MenuItem value={el.value} key={el.value}>
                        {el.text}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
              }}
            >
              <Button variant="outlined" onClick={handleClose}>
                Cansel
              </Button>
              <Button
                variant="contained"
                sx={{ marginLeft: "10px" }}
                onClick={submitForm}
              >
                Submit
              </Button>
            </Box>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default AddOrEditTodoForm;
