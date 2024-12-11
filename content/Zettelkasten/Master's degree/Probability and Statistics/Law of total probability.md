>[!info]
>Let $\{B_1, B_2, \dots, B_n\}$$ be a partition of the sample space $\Omega$, meaning:
>- The events $(B_1, B_2, \dots, B_n)$ are mutually exclusive $(B_i \cap B_j = \emptyset\ \text{for}\ i \neq j)$ and
>- They cover the entire sample space $(\bigcup_{i=1}^{n} B_i = \Omega)$.
>
If $A$ is any event, the Law of Total Probability states that:
>$$P(A) = \sum_{i=1}^{n} P(A \mid B_i) P(B_i)
$$




We give a simple example.

Suppose you want to calculate the probability that a customer buys a product (event A). The customer can either visit the store in person (event $B_1$) or visit the online store (event $B_2$).
Supposing these to be the only 2 possibilities, i.e. $B_1 \cup B_2 = \Omega$, and the event are mutually exclusive, we can apply the law of total probability:

$$
P(A) = P(A \mid B_1) P(B_1) + P(A \mid B_2) P(B_2)
$$

This formula allows you to calculate the overall probability that the customer buys the product, considering both ways of visiting the store.
