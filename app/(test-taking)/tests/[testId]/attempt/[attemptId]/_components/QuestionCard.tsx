// app/(test-taking)/tests/[testId]/attempt/[attemptId]/_components/QuestionCard.tsx
import { useState } from "react"
import { type TestAttemptQuestion } from "@/types/tests/test-attempt-question"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface QuestionCardProps {
  question: TestAttemptQuestion
  isActive: boolean
  attemptId: string
}

export function QuestionCard({ question, isActive, attemptId }: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    question.selectedOptionId || undefined
  )

  const handleOptionSelect = async (optionId: string) => {
    setSelectedOption(optionId)
    // TODO: Implement answer submission logic
  }

  return (
    <Card className={cn(
      "transition-all duration-200",
      isActive ? "ring-2 ring-blue-500" : "opacity-60"
    )}>
      <CardContent className="p-6">
        <p className="font-medium mb-4">{question.question.title}</p>
        <RadioGroup 
          value={selectedOption} 
          onValueChange={handleOptionSelect}
          className="space-y-3"
        >
          {question.question.options.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <RadioGroupItem value={option.id} id={option.id} />
              <Label htmlFor={option.id}>{option.text}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}