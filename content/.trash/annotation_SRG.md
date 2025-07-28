# Annotations and Clarifications for Scaling and Renormalization Group Notes

This document contains clarifications for the notes in the 'Scaling and Renormalization group' directory.

---

## 1. Structure and Flow of the Notes

The notes in this section build a cohesive picture of modern critical phenomena theory, starting from phenomenological scaling ideas and culminating in the renormalization group (RG). The logical progression is as follows:

*   **Phenomenological Scaling Theories:**
    *   `Widom's scaling hypothesis.md`: Postulates that the singular part of the free energy is a generalized homogeneous function, which leads to scaling relations between critical exponents.
    *   `Kadanoff argument.md`: Provides a physical basis for Widom's scaling by introducing the concept of block-spin transformations (coarse-graining).

*   **The Renormalization Group (RG) Formalism:**
    *   `Renormalization Group.md` & `RG transformation.md`: Introduce the core ideas of the RG as a formal procedure for systematically coarse-graining a system.
    *   `RG and the origin of scaling.md`: Shows how the RG formalism naturally gives rise to the scaling laws postulated by Widom and Kadanoff.
    *   `Fixed points in RG theory.md` & `Classification of fixed points in RG theory.md`: Discuss the central role of fixed points in determining the critical behavior of a system.
    *   `Linearization of RG close to the fixed points and critical exponents.md`: Explains how to extract critical exponents from the eigenvalues of the linearized RG transformation near a fixed point.

*   **Applications and Examples:**
    *   `Real space renormalization group (RSRG) in the Ising model.md`: Provides a concrete example of an RSRG calculation for the 1D Ising model.

---

## 2. Suggested Clarifications and Improvements

*   **Kadanoff vs. Wilson RG:** The notes correctly identify the limitations of the Kadanoff argument (`The problem with Kadanoff theory.md`). It would be beneficial to explicitly state that the Wilson RG formalism, with its concept of a flow in the space of Hamiltonians, is the rigorous solution to these problems. The key difference is that Kadanoff assumed the coarse-grained Hamiltonian has the same form as the original, while Wilson's RG allows for the generation of new coupling constants.

*   **Hyperscaling Relations:** The notes derive several scaling relations (e.g., Rushbrooke, Griffith, Widom). It would be useful to have a summary file that lists all these relations and explains the concept of hyperscaling, which relates thermodynamic critical exponents to the spatial dimension `d` (e.g., $2 - \alpha = \nu d$).

*   **Universality:** The concept of universality is central to the RG. While it is mentioned, a dedicated file explaining that all systems within the basin of attraction of the same critical fixed point belong to the same universality class would be a valuable addition. This would clarify why systems with very different microscopic details can exhibit the same critical exponents.

*   **Real Space vs. Momentum Space RG:** The notes focus on Real Space RG (RSRG). A brief mention of Momentum Space RG, which is more suitable for continuous systems and field theories, would provide a more complete picture of the available RG techniques.
