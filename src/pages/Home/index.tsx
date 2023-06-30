import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, Separator, StartCountdownButton, TaskInput, MinutesAmountMinute } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="Organizar atividades da semana" />
            <option value="Comprar café" />
            <option value="Desenvolver site pessoal" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountMinute 
            type="number" 
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={0}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>
        
        <CountDownContainer> 
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>

      </form>
    </HomeContainer>
  )
}