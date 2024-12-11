We know that the refractive index is defined for non dissipative systems as :

$$ n^2 = \varepsilon_r\mu_r $$

And in general $\varepsilon_r$ and $\mu_r$ are positive . 
Because mathematically it can be also possible that both of them are negative, we investigate this possibility.
From now on we return to the convention in which we drop the indexes.
We consider the Maxwell's equations in the harmonic approximation, i.e. in a volume in which no sources are present and where the material in the volume is either para- or dia-magnetic. We then have that the electric and magnetic field are plane waves.
This can also be seen in literature as the formal substitution $\nabla \to i\bar{k}$ and $\partial_t \to -i \omega$, so that we rewrite the Maxwell's equations as:

$$  
\begin{cases}
\bar{k} \cdot \varepsilon_0\varepsilon \bar{E} =0 \\
\bar{k} \cdot \mu_0 \mu\bar{H} = 0 \\
\bar{k} \times \bar{E}_0  =  \omega \mu_0 \mu \bar{H} \\
\bar{k} \times \bar{H}_0 = - \omega \varepsilon_0\varepsilon\bar{E}
\end{cases} $$

Also we recall the definition of Poynting vector $\bar{S} = \bar{E} \times \bar{H}$
Now we consider the 2 cases, one in which both $\varepsilon$ and $\mu$ are positive and one in which both are negative.
The considerations are reported in the following picture:

![[Images/Pasted image 20230705185737.png|500]]

We have that $\bar{E}, \bar{H}, \bar{k}$ form a right handed triplet in the positive case, while form a left handed triplet in the negative case.
In both cases however, the triplet $\bar{E}, \bar{H}, \bar{S}$ is right handed.
For these considerations we call from now on the first case right-handed (both positive) and the second case left-handed (both negative)
Another quantitative way to define this difference is to consider the determinant of the matrix $G$ of the direction cosines for $\bar{E}, \bar{H}, \bar{k}$ , so that:

![[Images/Pasted image 20230705190557.png|200]]

Finally is useful to see differences in some specific optical phenomena.

## Snell's law

For both cases the continuity condition on the $\bar{E}$ and $\bar{H}$ fields are valid. The tangential condition are unaffected because they are indipendent by $\varepsilon$ or $\mu$, while the orthogonal condition change their sign if we pass from a normal material to a metamaterial.
We can see in the picture this, specifically for the Snell law:

![[Images/Pasted image 20230706142617.png|300]]![[Images/Pasted image 20230706142651.png|300]]

Of extreme importance are also the vectors $\bar{k}$ and $\bar{S}$.
Using the general relations derived before we see that the wavevector is directed toward the surface, while the Poyting vector has the same orientation as the normal case.
This guarantees that there is no casuality violation, so that in general we can observe this phenomena.

One can also state a generalized Snell law which is function of the $p$ parameter that indicates if the system is RH or LH, that states:

![[Images/Pasted image 20230706143745.png|500]]

One extremely important application of the existence of this material would be the creation of a perfect lens, with no aberration phenomena :

![[Images/Pasted image 20230706144214.png|500]]


## Doppler effect

In the case of a LH material the phenomenology of the Doppler effect is reversed respect to a normal material:

![[Images/Pasted image 20230706143957.png|500]]