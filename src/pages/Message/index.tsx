import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  BackButton,
  Form,
  FormH1,
  FormLabel,
  Input,
  FormButton,
  ButtonWrap,
  TextArea,
} from "./MessageElements";
import axios from "axios";
import ScrollToTop from "../../components/ScrollToTop";
import Swal from "sweetalert2";

const Message = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    SendToDiscord();
    setFormData({
      fname: "",
      lname: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Christine will get back to you shortly :)",
    });
  }

  const SendToDiscord = async () => {
    const body = {
      content:
        "Name: " +
        formData.fname +
        " " +
        formData.lname +
        " // Phone Number: " +
        formData.phoneNumber +
        " // Message: " +
        formData.message,
      username: formData.fname + " " + formData.lname,
      color: "white",
      embeds: [
        {
          title: formData.email,
          url: "https://mail.google.com/mail/u/0/#inbox?compose=new",
          thumbnail: {
            url: "https://3.bp.blogspot.com/-dYvSrltzDvc/W3JAieJvXRI/AAAAAAALndU/zrfd-G6VSZ8cmeKcd6eM-ksBkYvRvVogwCLcBGAs/s1600/TF0006174.png",
          },
        },
      ],
    };

    try {
      const link = import.meta.env.VITE_DISCORD_WEBHOOK;
      const data = await axios.post(link, body);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const FormInputData: { label: string; placeholder: string }[] = [
    { label: "First Name", placeholder: "Your first name.." },
    { label: "Last Name", placeholder: "Your last name.." },
    { label: "Email", placeholder: "Your email.." },
    { label: "Phone Number", placeholder: "Your phone number.." },
  ];

  const messageData: { label: string; placeholder: string } = { label: "Message", placeholder: "What do you want Christine to know?" };

  const formDataFields = ['fname', 'lname', 'email', 'phoneNumber'
  ];

  return (
    <>
      <ScrollToTop />
      <Container>
        <ButtonWrap>
          <BackButton
            onClick={() => {
              window.location.reload();
              navigate(-1);
            }}
          >
            GO BACK
          </BackButton>
        </ButtonWrap>
        <Form
          id="myForm"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
            (document.getElementById("myForm") as HTMLFormElement | null)?.reset();
          }}
        >
          <FormH1>Contact &nbsp;Christine!</FormH1>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} >
            {
              FormInputData.map((props, i) => (
                <div key={i}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormLabel>{props.label}</FormLabel>
                    <p style={{ fontSize: "14px", color: "red" }}>&nbsp;*</p>
                  </div>
                  <Input
                    placeholder={props.placeholder}
                    required
                    data-key={i}
                    onChange={(e) => {
                      const fieldKey = formDataFields[i];
                      setFormData({ ...formData, [fieldKey]: e.target.value });
                    }}
                  />
                </div>
              ))
            }
          </div>

          <div style={{ display: "flex", flexDirection: 'column', alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FormLabel>{messageData.label}</FormLabel>
              <p style={{ fontSize: "14px", color: "red" }}>&nbsp;*</p>
            </div>
            <TextArea rows={5} placeholder={messageData.placeholder} required onChange={(e) => {
              setFormData({ ...formData, 'message': e.target.value });
            }}></TextArea>
          </div>
          <FormButton type="submit">Submit</FormButton>
        </Form>
      </Container >
    </>
  );
};

export default Message;
