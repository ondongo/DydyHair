import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from "../../../../emails/EmailTemplate";

import { transporter, baseMailOptions } from "../../../../lib/mailer";
import { render } from "@react-email/render";
import ReceveidTemplate from "../../../../emails/ReceveidTemplate";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { email, name, phone, date, time, service, haircut } = body;
    let plainTextMail: string = "";
    let plainTextMail2: string = "";
    let reactToHtml: string = "";
    let reactToHtml2: string = "";

    if (email) {
      plainTextMail = render(
        <EmailTemplate
          email={email}
          name={name}
          phone={phone}
          date={date}
          time={time}
          service={service}
          haircut={haircut}
        />,
        {
          plainText: true,
        }
      );

      plainTextMail2 = render(
        <ReceveidTemplate
          email={email}
          name={name}
          phone={phone}
          date={date}
          time={time}
          service={service}
          haircut={haircut}
        />,
        {
          plainText: true,
        }
      );

      reactToHtml = render(
        <EmailTemplate
          email={email}
          name={name}
          phone={phone}
          date={date}
          time={time}
          service={service}
          haircut={haircut}
        />
      );

      reactToHtml2 = render(
        <ReceveidTemplate
          email={email}
          name={name}
          phone={phone}
          date={date}
          time={time}
          service={service}
          haircut={haircut}
        />
      );

      const [firstEmailResponse, secondEmailResponse] = await Promise.all([
        transporter.sendMail({
          ...baseMailOptions,
          to: "dydyhair2024@gmail.com",
          subject: "Prise de rendez-vous sur dydy's hair",
          text: plainTextMail,
          html: reactToHtml,
        }),
        transporter.sendMail({
          ...baseMailOptions,
          to: email,
          subject: "Prise de rendez-vous sur dydy's hair",
          text: plainTextMail2,
          html:  reactToHtml2,
        }),
      ]);

      console.log("First Email Response", firstEmailResponse);
      console.log("Second Email Response", secondEmailResponse);

      return Response.json({ firstEmailResponse, secondEmailResponse });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Receiver Email is Invalid",
        },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error(error);
    NextResponse.json({ error });
  }
};
