import { zodResolver } from "@hookform/resolvers/zod";
import { HandPalm, Play } from "phosphor-react";

import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";

import { CountDown } from "./components/CountDown";
import { NewCycleForm } from "./components/NewCycleForm";
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from "./styles";
import { CyclesContext } from "../../contexts/CyclesContext";
import { useContext } from "react";

const newCycleFormValidations = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo 5 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidations>;
export default function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidations),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const isSubmittedDisabled = !task;

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StopCountDownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={isSubmittedDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  );
}
