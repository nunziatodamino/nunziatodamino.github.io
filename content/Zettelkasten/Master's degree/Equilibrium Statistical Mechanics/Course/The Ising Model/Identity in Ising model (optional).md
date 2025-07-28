Let's use a concrete example of a simple lattice of three sites (1, 2, 3) connected in a triangle.

```
   1     1
   2    / \
   3   2---3
```


  In this lattice, every site has a coordination number of $z=2$. The unique nearest-neighbor pairs $\braket{i,j}$ are:
   * $\braket{1,2}$
   * $\braket{1,3}$
   * $\braket{2,3}$


  We can write out the sum $\sum_{\braket{i,j}} (\sigma_i + \sigma_j)$ term by term for each pair:
  $$ \text{Sum} = (\sigma_1 + \sigma_2) + (\sigma_1 + \sigma_3) + (\sigma_2 + \sigma_3) $$

  Now, we regroup the terms by the site index to count how many times each $\sigma$ appears:
  
  $$ \text{Sum} = (\sigma_1 + \sigma_1) + (\sigma_2 + \sigma_2) + (\sigma_3 + \sigma_3)= 2\sigma_1 + 2\sigma_2 + 2\sigma_3 $$

  Since we defined $z=2$ for this lattice, we can see this is equivalent to:

  $$ \text{Sum} = z\sigma_1 + z\sigma_2 + z\sigma_3 $$

  Factoring out $z$ gives the final result in the form of a sum over sites:
  $$ \text{Sum} = z (\sigma_1 + \sigma_2 + \sigma_3) = z \sum_i \sigma_i $$
