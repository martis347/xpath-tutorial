/* eslint-disable */

import { ExerciceData } from './BaseExercise';

export const extractExercises = (req: any) => {
  return req
    .keys()
    .filter((k: any) => !k.includes('index.ts') && !k.includes('BaseExercise.tsx'))
    .reduce((acc: any, key: any) => {
      const data: ExerciceData = req(key).default;
      const exerciseId = data.id;

      return {
        [exerciseId]: data,
        ...acc,
      };
    }, {}) as { [key: string]: ExerciceData };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default extractExercises((require as any).context('./', false, /.tsx/));
