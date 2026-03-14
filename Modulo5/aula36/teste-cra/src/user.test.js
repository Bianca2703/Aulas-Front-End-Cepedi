const user = { name: 'Ana' };
expect(user).toBe({ name: 'Ana' }); // FALHA (referência de memória diferente)
expect(user).toEqual({ name: 'Ana' }); // PASSA (conteúdo igual)
