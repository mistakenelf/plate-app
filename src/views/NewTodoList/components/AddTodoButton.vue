<template>
      <div  @click="$emit('addTodo')" class="cursor-pointer m-2 w-full bg-white h-16 flex items-center justify-center">
          <div class="flex flex-row items-center justify-center">
            <font-awesome-icon
              icon="plus"
              class="text-lg mr-4 font-thin text-grey-darker"
            />
            <div class="text-lg text-grey-darker uppercase">Add Todo</div>
          </div>
        </div>
</template>
