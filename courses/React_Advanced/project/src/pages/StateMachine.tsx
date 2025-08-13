import { useState } from 'react';
import './StateMachine.css';

interface StateMachineConfig<StateType, StepNames extends string> {
  initialStep: StepNames;
  steps: {
    [key in StepNames]: {
      canAdvance: (state: StateType) => boolean;
    };
  };
  views: {
    [key in StepNames]: React.ComponentType<{
      state: StateType;
      setState: React.Dispatch<React.SetStateAction<StateType>>;
    }>;
  };
}

type WizardState = {
  name: string;
  age: number;
};

type StepNames = 'step1' | 'step2' | 'confirmation';

const stateMachineConfig: StateMachineConfig<WizardState, StepNames> = {
  initialStep: 'step1',
  steps: {
    step1: {
      canAdvance: (state) => !!state.name,
    },
    step2: {
      canAdvance: (state) => !!state.age,
    },
    confirmation: {
      canAdvance: () => true,
    },
  },
  views: {
    step1: ({ state, setState }) => (
      <div>
        <input
          placeholder="Full name"
          type="text"
          value={state.name}
          onChange={(e) =>
            setState((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
    ),
    step2: ({ state, setState }) => (
      <div>
        <input
          placeholder="Your age"
          type="number"
          value={state.age}
          onChange={(e) =>
            setState((prev) => ({ ...prev, age: Number(e.target.value) }))
          }
        />
      </div>
    ),
    confirmation: ({ state }) => (
      <div>
        <p>
          {state.name} is {state.age} years old.
        </p>
      </div>
    ),
  },
};

const getStepView = <T, V extends string>(
  config: StateMachineConfig<T, V>,
  stepName: V
): React.ComponentType<{
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
}> => config.views[stepName];

const StateMachine = () => {
  const [wizardState, setWizardState] = useState({ name: '', age: 0 });
  const [currentStep, setCurrentStep] = useState(
    stateMachineConfig.initialStep
  );

  const handleNext = () => {
    const canAdvance =
      stateMachineConfig.steps[currentStep].canAdvance(wizardState);

    if (!canAdvance) return alert("You can't move forward.");

    if (currentStep === 'step1') setCurrentStep('step2');
    else if (currentStep === 'step2') setCurrentStep('confirmation');
  };

  const StepComponent = getStepView(stateMachineConfig, currentStep);

  return (
    <section>
      <h1>State Machine Wizard 🔮</h1>

      <StepComponent state={wizardState} setState={setWizardState} />

      {currentStep !== 'confirmation' ? (
        <button type="button" onClick={handleNext}>
          Next
        </button>
      ) : null}
    </section>
  );
};

export default StateMachine;
