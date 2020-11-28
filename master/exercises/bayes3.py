print("""
En las elecciones de un país hay 2 candidatos a la presidencia, el
candidato A y el candidato B y en los resultados de las selecciones se
sabe que un 75% de la población es de clase media y baja y un 25%
son de son de clase alta, si por el candidato A votó un 90% de la clase
alta y un 5% de la clase media y baja, y se elige una persona al azar de
los que votaron por el candidato A
¿Cuál es la probabilidad que este sea de la clase media y baja?


SOLUTION MADE WITH BAYES' THEOREM
""")


def calc_bayes(prior_A, prob_B_given_A, prob_B):
    return (prior_A * prob_B_given_A) / prob_B


if __name__ == "__main__":

    # Percentage of each class population

    # P( Middle and Lower Class )
    prob_mid_and_low = .75

    # P( Upper Class )
    prob_up = .25


    # Probability the upper class vote for A = P( A | Upper Class )
    prob_up_vote_a = .9

    # Probability the middle and lower class vote for A = P( A | Middle and Lower Class )
    prob_mid_and_low_vote_A = .05


    # P( Votes for A ) = P( A )
    prob_votes_a = (prob_mid_and_low * prob_mid_and_low_vote_A +
     prob_up * prob_up_vote_a)


    # P( Middle and Lower Class | A )
    prob_vote_a_mid_and_low = calc_bayes(prob_mid_and_low, prob_mid_and_low_vote_A, prob_votes_a)
    print(f'The probability is {round(prob_vote_a_mid_and_low*100, 2)}%')
