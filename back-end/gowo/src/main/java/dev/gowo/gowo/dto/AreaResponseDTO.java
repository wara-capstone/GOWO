package dev.gowo.gowo.dto;

import lombok.*;

@Builder
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class AreaResponseDTO {
    int totalCount;
    Object data;
}