type Id = number | string;

interface NormalizeData<Data> {
  ids: Id[];
  entities: Record<Id, Data>;
}

export const emptyNormalizedData: NormalizeData<never> = {
  entities: {},
  ids: [],
};

export const normalizeData = <Data>(
  dataArray: Data[],
  idSelector: (data: Data) => Id,
): NormalizeData<Data> => ({
  ids: dataArray.map(idSelector),
  entities: dataArray.reduce<Record<Id, Data>>((acc, cur) => {
    acc[idSelector(cur)] = cur;

    return acc;
  }, {}),
});
