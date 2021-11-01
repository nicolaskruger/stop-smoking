import { NextPage } from "next"
import { FormEvent, useState } from "react";
import styled from "styled-components"
import { Container, H1, P, PulseLalbel, RedirectRouter } from "../components"
import { InputAllInfoCad } from "../components/input";
import { Layout } from "../components/layout/layout.component";
import { SelectAllInfo } from "../components/select";
import { FormCarInfoReturn, useFormCadInfo } from "../hooks";

const Title = "Parabéns pela sua decisão em deixar de fumar !";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

interface FormWithLabel extends FormCarInfoReturn {
    label: string
};

const Cad: NextPage = () => {

    const myLabel = [
        "Cigarros fumados por dia",
        "Cigarros num maço",
        "Anos a fumar",
        "Preço por maço"
    ]

    const myForm: FormWithLabel[] = [
        useFormCadInfo(25),
        useFormCadInfo(20),
        useFormCadInfo(5),
        useFormCadInfo(0)
    ].map((value, index): FormWithLabel => ({
        ...value,
        label: myLabel[index]
    }));

    const [coin, setCoin] = useState("");

    const [cigarrtesPerDay, setCigaretsPerDay] = useState(0);
    const [cigaretesPerDayErro, setCigaretsPerDayErro] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <Layout>
            <Section>
                <H1>
                    {Title}
                </H1>
                <P>
                    Quando deixou de fumar:
                </P>
                <PulseLalbel>
                    {new Date().toDateString()}
                </PulseLalbel>
                <Form onSubmit={handleSubmit} action="">
                    {
                        myForm.map((val, i) => (
                            <InputAllInfoCad
                                key={i}
                                value={val.value}
                                onChange={val.setValue}
                                type="number"
                                label={val.label}
                                erroMessage={val.erro}
                            />
                        ))
                    }
                    <SelectAllInfo value={coin} onChange={setCoin} />
                </Form>
            </Section>
        </Layout>
    )
}

export default Cad;