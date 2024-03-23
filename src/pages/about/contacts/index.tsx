import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import contacts from "@/pages/about/contacts/index";

type ContactProps = {
  contacts: {
    email: string;
    phone: string;
  };
};

const Contact = memo(({ contacts }: ContactProps) => {
  return (
    <>
      <AppHead title="Contact" description="" />
      <div>Contacts</div>
      <div>{contacts.email}</div>
      <div>{contacts.phone}</div>
    </>
  );
});
Contact.displayName = "Contact";
export default Contact;
export async function getStaticProps({}: GetStaticPropsContext<{}>): Promise<
  GetStaticPropsResult<ContactProps>
> {
  const contacts = {
    email: "paolo.rossi@live.it",
    phone: "1213451",
  };
  return {
    props: {
      contacts,
    },
  };
}
