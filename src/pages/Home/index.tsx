import { Play } from "phosphor-react";
import {
  AmountInput,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  SeparatorContainer,
  StartCountdownButton,
  TaskInput,
} from "./styles";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, watch } = useForm();

  const task = watch("task");
  const isSubmittedDisabled = !task;

  function handleSubmitCreateCycle(data: any) {
    console.log(data);
  }
  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleSubmitCreateCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register("task")}
          />
          <datalist id="task-suggestions">
            <option value="React" />
            <option value="React Native" />
            <option value="Vue" />
            <option value="Angular" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <AmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <SeparatorContainer>:</SeparatorContainer>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton disabled={isSubmittedDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
