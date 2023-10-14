import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  fullname: Yup.string("please enter string").required("please enter your name"),
  photo: Yup.string().url("please enter your photo").required("Your Address is not correct"),
  mobile: Yup.number("please enter number").required("please enter your mobile phone"),
  email: Yup.string().email("email is not correct").required("please enter your email"),
  job: Yup.string().nullable(),
  group: Yup.string().required("please select your group"),
});
