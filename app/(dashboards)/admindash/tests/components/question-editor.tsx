"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { QuestionType } from "@/types/test"
import { QuestionForm } from "./question-form"

interface QuestionEditorProps {
  questions: Partial<QuestionType>[]
  onChange: (questions: Partial<QuestionType>[]) => void
}

export function QuestionEditor({ questions, onChange }: QuestionEditorProps) {
  const addQuestion = () => {
    onChange([
      ...questions,
      {
        text: "",
        type: "MULTIPLE_CHOICE",
        order: questions.length,
        options: []
      }
    ])
  }

  const handleQuestionChange = (index: number, updatedQuestion: Partial<QuestionType>) => {
    const newQuestions = [...questions]
    newQuestions[index] = updatedQuestion
    onChange(newQuestions)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Questions</h3>
        <Button onClick={addQuestion} type="button">
          Add Question
        </Button>
      </div>

      {questions.map((question, index) => (
        <QuestionForm
          key={index}
          question={question}
          onChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}
        />
      ))}
    </div>
  )
}