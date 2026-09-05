Starting from [[Dirac equation]], let's assume $\bar A,\Phi$ time independent.
We want to find stationary solutions for the Dirac equation:

$$  
\Psi(\bar r,t)=\chi(\bar r)e^{-iEt/\hbar},  
\qquad  
\chi(\bar r)=  
\begin{pmatrix}  
\varphi(\bar r) \\  
\eta(\bar r)  
\end{pmatrix}.  
$$

We obtain by substitution:

$$
E\chi(\bar r) =
\left[  
-i\hbar c\hat{\bar\alpha}\cdot\bar\nabla  
-cq\hat{\bar\alpha}\cdot\bar A  
+q\Phi\mathbb{1}_4  
+\hat\beta mc^2  
\right]\chi(\bar r).  
$$

Then, using the representation

$$
\hat{\bar \alpha} = 
\begin{pmatrix}  
0 & \bar \sigma \\  
\bar \sigma & 0 
\end{pmatrix}  

\qquad
\hat{\beta} = 
\begin{pmatrix}  
\mathbb{1}_2 & 0 \\  
0 & -\mathbb{1}_2  
\end{pmatrix}  
$$

we have following the same ansatz of [[The Pauli equation for a charged particle]]:

$$
\begin{pmatrix}  
(q\Phi+mc^2)\mathbb{1}_2 & c(\bar\sigma\cdot\hat{\bar\pi}) \\  
c(\bar\sigma\cdot\hat{\bar\pi}) & (q\Phi-mc^2)\mathbb{1}_2  
\end{pmatrix}  
\begin{pmatrix}  
\varphi(\bar r) \\  
\eta  (\bar r)
\end{pmatrix} = E 
\begin{pmatrix}  
\varphi(\bar r) \\  
\eta  (\bar r)
\end{pmatrix}
$$

