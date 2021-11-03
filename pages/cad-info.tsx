import { NextPage } from "next"
import { useRouter } from "next/dist/client/router";
import { FormEvent, useState } from "react";
import styled from "styled-components"
import { Container, H1, P, PulseLalbel, RedirectRouter } from "../components"
import { SubmitButton } from "../components/button";
import { InputAllInfoCad } from "../components/input";
import { Layout } from "../components/layout/layout.component";
import { SelectAllInfo } from "../components/select";
import { ROUTES_FRONTEND } from "../constants";
import { FormCarInfoReturn, useFormCadInfo, useFormList } from "../hooks";
import { cronAction, infoActions, useAppDispatch } from "../reducer";

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

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

interface FormWithLabel extends FormCarInfoReturn {
    label: string,
    hidde: boolean
};


const Cad: NextPage = () => {

    const dispatch = useAppDispatch();

    const router = useRouter();

    const {
        myForm,
        coin,
        setCoin,
        toDispatch,
        validate
    } = useFormList();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if (!validate()) return;
        dispatch(
            infoActions.setState({
                ...toDispatch()
            })
        )
        dispatch(
            cronAction.stopDate()
        )
        router.push(ROUTES_FRONTEND.HOME);
    }

    return (
        <Layout ligth>
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
                                button={val.hidde}
                            />
                        ))
                    }
                    <Div>
                        <SelectAllInfo value={coin} onChange={setCoin} />
                        <SubmitButton />
                    </Div>
                </Form>
            </Section>
        </Layout>
    )
}

export default Cad;