'use client';

import { useSubmitContact } from '@/hooks/useContacts';
import { useForm } from 'react-hook-form';
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import Textarea from '@/components/shared/Textarea';

export default function ContactPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { mutateAsync: submitContact, isPending } = useSubmitContact();

  const onSubmit = async (data) => {
    await submitContact(data);
  };

  return (
    <section id="content-wrap" className="site-page">
      <div className="row">
        <div className="col-twelve">
          <section>
            <h1 className="entry-title add-bottom">Get In Touch With Us.</h1>

            <p className="lead">
              Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna
              occaecat Excepteur nisi esse veniam dolor consectetur minim qui
              nisi esse deserunt commodo ea enim ullamco non voluptate
              consectetur minim aliquip Ut incididunt amet ut cupidatat.
            </p>

            <p>
              Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
              nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
              incididunt adipisicing veniam velit id fugiat enim mollit amet
              anim veniam dolor dolor irure velit commodo cillum sit nulla
              ullamco magna amet magna cupidatat qui labore cillum sit in tempor
              veniam consequat non laborum adipisicing aliqua ea nisi sint ut
              quis proident ullamco ut dolore culpa occaecat ut laboris in sit
              minim cupidatat ut dolor voluptate enim veniam consequat occaecat
              fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua
              laborum mollit quis nostrud sed sed.
            </p>

            <div className="row">
              <div className="col-six tab-full">
                <h4>Where to Find Us</h4>

                <p>
                  1600 Amphitheatre Parkway
                  <br />
                  Mountain View, CA
                  <br />
                  94043 US
                </p>
              </div>

              <div className="col-six tab-full">
                <h4>Contact Info</h4>

                <p>
                  someone@abstractwebsite.com
                  <br />
                  info@abstractwebsite.com <br />
                  Phone: (+63) 555 1212
                </p>
              </div>
            </div>
            <form
              name="cForm"
              id="cForm"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <fieldset>
                <Input
                  placeholder="Your Name *"
                  error={errors.name?.message}
                  {...register('name', {
                    required: 'Please enter your name',
                  })}
                />

                <Input
                  type="email"
                  placeholder="Your Email *"
                  error={errors.email?.message}
                  {...register('email', {
                    required: 'Please enter your email address',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address',
                    },
                  })}
                />

                <Input placeholder="Website" {...register('website')} />

                <Textarea
                  placeholder="Your message *"
                  error={errors.message?.message}
                  {...register('message', {
                    required: 'Please enter your message',
                  })}
                />

                <Button type="submit" loading={isPending}>
                  Submit
                </Button>
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}
