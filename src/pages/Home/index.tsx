import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, Separator, StartCountdownButton, TaskInput, MinutesAmountMinute } from "./style";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod' // Integração do useForm com o zod
import * as zod from 'zod' // Não tem export default

const newCycleFromValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(0).max(60, 'O número precisa ser de 1 a 60'),
})

type NewCycleFormData = zod.infer<typeof newCycleFromValidationSchema>

export function Home() {
  const {register, handleSubmit, watch, reset} = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFromValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data);
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
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
            {...register('minutesAmount', {valueAsNumber: true})}
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

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>

      </form>
    </HomeContainer>
  )
}