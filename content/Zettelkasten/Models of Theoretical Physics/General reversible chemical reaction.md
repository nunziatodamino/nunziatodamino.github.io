Suppose to have $m$ chemical species $X_i$ with relative concentration $x_i$, involved in $n$ different chemical reactions of the type:

$$ \sum_{i=1}^ma_{ij}X_i \overset{k_j^+}{\underset{k_j^-}\rightleftarrows} \sum_{i=1}^mb_{ij}X_i \qquad j=1,2,\dots, n $$

Then for each reaction, we can evaluate the reaction rate as:

$$ r_j(x_1,\dots,x_m) = r_j(\bar{x}) = r_j^+-r_j^- = k_j^+ \prod_{i=1}^mx_i^{a_{ij}}- k_j^- \prod_{i=1}^mx_i^{b_{ij}} \qquad j=1,2,\dots, n$$

So that we can write, for each chemical species the following ODE:

$$ \dot{x_i}=\sum_{j=1}^n(b_{ij}-a_{ij}) r_j(\bar{x}) = \sum_{j=1}^n(b_{ij}-a_{ij})\left( k_j^+ \prod_{i=1}^mx_i^{a_{ij}}- k_j^- \prod_{i=1}^mx_i^{b_{ij}}\right)  \qquad i=1,2,\dots, m$$

