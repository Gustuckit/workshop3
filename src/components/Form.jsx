import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { TextField, Button, Stack, Checkbox } from "@mui/material";

import { Context } from "../App";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    address: yup.string().required(),
    postal: yup.number().positive().integer().required(),
    city: yup.string().required(),
    phone: yup.number().positive().integer().required(),
    tos: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required(),
  })
  .required();

const Form = () => {
  const [result, setResult] = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setResult(data);
    navigate("results");
  };
  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input placeholder="Namn" {...register("firstName")} />
    //   <p>{errors.firstName?.message}</p>

    //   <input placeholder="Förnamn" {...register("lastName")} />
    //   <p>{errors.lastName?.message}</p>

    //   <input placeholder="E-post" {...register("email")} />
    //   <p>{errors.email?.message}</p>

    //   <input placeholder="Adress" {...register("address")} />
    //   <p>{errors.address?.message}</p>

    //   <input placeholder="Postnummer" {...register("postal")} />
    //   <p>{errors.postal?.message}</p>

    //   <input placeholder="Ort" {...register("city")} />
    //   <p>{errors.city?.message}</p>

    //   <input placeholder="Telefon" {...register("phone")} />
    //   <p>{errors.phone?.message}</p>

    //   <label>Jag godkänner integritetspolicy</label>
    //   <input type="checkbox" {...register("tos")} />
    //   <p>{errors.tos?.message}</p>

    //   <input type="submit" />
    // </form>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} width={400}>
        <TextField label="Namn" {...register("firstName")} />
        <p>{errors.firstName?.message}</p>
        <TextField label="Efternamn" {...register("lastName")} />
        <p>{errors.firstName?.message}</p>
        <TextField label="E-post" {...register("email")} />
        <p>{errors.firstName?.message}</p>
        <TextField label="Adress" {...register("address")} />
        <p>{errors.firstName?.message}</p>
        <TextField label="Postnummer" {...register("postal")} />
        <p>{errors.firstName?.message}</p>
        <TextField label="Ort" {...register("city")} />
        <p>{errors.firstName?.message}</p>
        <TextField label="Telefon" {...register("phone")} />
        <p>{errors.firstName?.message}</p>
        <label>Jag godkänner integritetspolicy</label>
        <Checkbox {...register("tos")} />
        <Button type="submit">Skicka</Button>
      </Stack>
    </form>
  );
};

export default Form;
