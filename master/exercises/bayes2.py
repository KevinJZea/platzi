print("""
En una fábrica de latas producen latas de dos tamaños, de 25 ml y de
40 ml, si se sabe que hacen la misma cantidad de ambas latas y que un
1% de las latas de 25ml y un 4% de las latas de 40ml salen defectuosas

¿Cuál es la probabilidad que al seleccionar una lata de las defectuosas
al azar ésta sea de 40ml?


SOLUTION MADE WITH BAYES' THEOREM
""")


def calc_bayes(prior_A, prob_B_given_A, prob_B):
    return (prior_A * prob_B_given_A) / prob_B


if __name__ == "__main__":
    
    # P( Produce Size 25ml )
    prob_produce_size_25 = .5

    # P( Produce Size 40ml )
    prob_produce_size_40 = .5

    # P( Defects in 25ml Production ) = P( Defects | Produce Size 25ml )
    prob_defects_size_25 = .01

    # P( Defects in 40ml Production ) = P( Defects | Produce Size 40ml )
    prob_defects_size_40 = .04


    # P( Defects )
    prob_defects = (prob_produce_size_25 * prob_defects_size_25 +
     prob_produce_size_40 * prob_defects_size_40)


    # P( Size 40 | Defects )
    prob_size_40_defects = calc_bayes(prob_produce_size_40, prob_defects_size_40, prob_defects)
    print(f'The probability is {round(prob_size_40_defects*100, 2)}%')
    