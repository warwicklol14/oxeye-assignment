import {useForm} from "react-hook-form";
import React, { useState } from "react";
import { useToast, Textarea } from "@chakra-ui/core";
import uuid from "uuid";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from "@chakra-ui/core";
import Layout from "../components/layout";
import {firebaseConfig} from "../fire";

interface FormData {
    name:string;
    email:string;
    message:string;
}

const ContactUs = () => {
    const { register, handleSubmit, errors } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toast = useToast();
    
    async function onSubmit(values:FormData) {
        setIsSubmitting(true);
        let fire;
        if (typeof window !== 'undefined') {
            fire = require('firebase');
        }
        fire.initializeApp(firebaseConfig);
        await fire.database().ref(`messages/${ uuid.v4() }`).set(values);
        toast({
            title: "Your message has been submitted",
            description: "We'll contact you soon.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        setIsSubmitting(false);
    }
    
    return (
        <Layout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.name ? true : false}>
                    <FormLabel htmlFor="name" color="white">Name</FormLabel>
                    <Input color="white"
                        name="name"
                        placeholder="Name"
                        ref={register({ required:"Name is required" })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.email ? true : false}>
                    <FormLabel htmlFor="email" color="white">Email</FormLabel>
                    <Input color="white"
                        name="email"
                        placeholder="Email"
                        ref={register({ required:"Email is required", pattern: {
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: 'Enter valid email'
                        } })}
                    />
                    <FormErrorMessage>
                    {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.message ? true : false}>
                    <FormLabel htmlFor="message" color="white">Message</FormLabel>
                    <Textarea ref={register({required:"Message is required"})}
                        name="message" 
                        placeholder="Enter your message" 
                        color="white"
                    ></Textarea>
                    <FormErrorMessage>
                    {errors.message && errors.message.message}
                    </FormErrorMessage>
                </FormControl>
                <Button mt={4} variantColor="teal" isLoading={isSubmitting} type="submit">
                    Submit
                </Button>
            </form>
        </Layout>

    );
}



export default ContactUs;