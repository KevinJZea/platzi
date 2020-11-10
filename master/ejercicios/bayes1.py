print("""
Se hizo una encuesta a personas en las que se les preguntaba el
género y si hacían ejercicio, los resultados fueron:

○ 40% hombres
○ 60% mujeres

El 80% de los hombres y el 50% de las mujeres dijeron que practicaban
algún deporte o hacen ejercicios.
Conociendo estos datos, si se selecciona una persona al azar de las
que respondió que hacía ejercicios ¿Cuál es la probabilidad que esta
persona sea un hombre?


SOLUTION MADE WITH BAYES' THEOREM
""")


def calc_bayes(prior_A, prob_B_given_A, prob_B):
    return (prior_A * prob_B_given_A) / prob_B


if __name__ == "__main__":
    # P( Men Surveyed )
    prob_men = .4
    #P( Women Surveyed )
    prob_women = .6

    # P( Men that Exercise ) = P( Exercise | Men )
    prob_men_exercise = .8
    # P( Women that Exercise ) = P( Exercise | Women )
    prob_women_exercise = .5

    # P( People that Exercise ) = P( Exercise )
    prob_exercise = (prob_men * prob_men_exercise +
     prob_women * prob_women_exercise)

    # P( Men | Exercise )
    prob_exercise_given_men = calc_bayes(prob_men_exercise, prob_men, prob_exercise)
    print(f'The probability is {round(prob_exercise_given_men*100, 2)}%')
